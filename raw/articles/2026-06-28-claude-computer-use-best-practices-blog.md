---
source_id: auto-20260628-cu03
tier: 1
source_type: official_blog
control_object: desktop_app
tech_layer: agent_integration
confidence: high
url: https://claude.com/blog/best-practices-for-computer-and-browser-use-with-claude
title: Best practices for computer and browser use with Claude
date_collected: 2026-06-28
---

# Best practices for computer and browser use with Claude

*Practical guidance for developers building computer and browser use integrations with the Claude model family.*

- Category: Agents
- Product: Claude Platform
- Date: May 13, 2026
- Reading time: 5 min

Claude's latest models represent a significant step forward in computer and browser use capabilities. Because of these features, LLMs are now able to power increasingly complex agentic systems that power real work, like building software applications and automating workflows across multiple, disparate technologies.

In this blog post, we share best practices for using Claude with computer and browser use, ranging from simple configuration changes to more advanced integration patterns. We hope this piece helps as you start integrating Claude's computer and browser use capabilities into your product. We are also releasing a new demo implementation which encapsulates some of these best practices and provides additional tools useful for developing on top of Claude's computer use capabilities.

*Note that these recommendations apply to the Claude 4.6 family (Opus 4.6, Sonnet 4.6, Haiku 4.5) and Claude Opus 4.7 unless otherwise noted. Where guidance differs between the 4.6 family and Opus 4.7, we call it out inline. Our findings are based on internal experimentation and may be updated in the future as new models and techniques emerge.*

## Getting started: resolution and scaling

Click accuracy is the foundation of any computer use integration. If clicks don't land where they should, nothing downstream works: forms don't get filled, buttons don't get pressed, and workflows fail. The single highest impact optimization is also one of the simplest: pre downscale your screenshots before sending them to the API.

### Ensure proper scaling

When you send a screenshot to Claude's Computer Use API, the model sees it and returns click coordinates in the display_width_px / display_height_px coordinate space you specified. But there's an important constraint: the API has internal processing limits on image size. Images that exceed these limits get downscaled before the model sees them, which means the model is clicking based on a degraded version of the image while your harness expects coordinates aligned to the original resolution.

For our Claude 4.6 model family, the API's limits are:

- **Max long edge**: 1568 pixels
- **Max total pixels**: 1.15 megapixels
- Images exceeding **either** limit get internally downscaled

Our Opus 4.7 model supports higher resolution. The limits are:

- **Max long edge**: 2576 pixels
- **Max total pixels**: 3.75 megapixels
- Images exceeding **either** limit get internally downscaled

When the coordinate space and the model's perceived image don't match, the model's predicted clicks land on a display scale different from the image it's actually seeing. This is the primary cause of click inaccuracy at high resolutions. The fix is straightforward: always downscale your screenshots to fit within these limits before sending them to the API. We consistently observe significant accuracy degradation when images exceed the limits, and this single change is worth more than almost any other optimization.

### Recommended resolutions

**Start with 1280x720.** This is a safe, practical default for most use cases. It uses about 80% of the pixel budget, stays well within both the long edge and total pixel limits, and is a standard resolution that models have seen during training. It works well for both modern web UIs and legacy desktop applications.

**If you are using Opus 4.7, we recommend starting with 1080p**, as this brings a meaningful quality lift over 720p and provides a good balance between token use and performance.

**For developers who want to maximize the visual information the model receives**, we also recommend a "max API fit" approach: computing the optimal resolution per-image based on the source's native aspect ratio:

```python
import math
# 1568 for 4.6 family, 2576 for Opus 4.7
MAX_LONG_EDGE = 1568
# 1.15MP for 4.6 family, 3.75MP for Opus 4.7
MAX_PIXELS = 1_150_000
def compute_max_api_fit(native_w, native_h):
    """Compute the largest resolution that fits API limits
    while preserving aspect ratio."""
    aspect = native_w / native_h
    # Compute max dimensions from pixel budget
    h_from_pixels = math.sqrt(MAX_PIXELS / aspect)
    w_from_pixels = h_from_pixels * aspect
    # Apply long edge constraint
    if native_w >= native_h:
        w = min(w_from_pixels, MAX_LONG_EDGE)
        h = w / aspect
    else:
        h = min(h_from_pixels, MAX_LONG_EDGE)
        w = h * aspect

    # Never upscale beyond native
    w = min(w, native_w)
    h = min(h, native_h)

    return int(w), int(h)
```

This approach is slightly more complex but avoids aspect ratio distortion and uses the full pixel budget available for each image. The accuracy improvement over a fixed 1280x720 is modest, but it's a straightforward implementation that avoids the distortion that occurs when forcing a 16:9 source into a 4:3 display resolution.

**Resolutions to avoid:**

- **Native resolution (unscaled)**: Unless your source images happen to be below the resolution limits, sending native resolution screenshots is the most common cause of poor click accuracy.
- **Very low resolutions (below 960x540)**: With low resolution images, too much detail is lost for the model to accurately identify small UI elements.
- **If on MacOS:** A common issue for browser use is that the screenshots on MacOS are often captured with a device pixel ratio of 2, which means that you can end up with images that are 2x the resolution of the screen coordinates.
- **If you are on the 4.6 family, avoid 1920x1080 and above:** These exceed the pixel limit and will be silently downscaled. On Opus 4.7 the ceiling is higher (3.75 MP), so 1080p and 1440p is within budget; still avoid native 4K without downscaling.

### Coordinate scaling

When you resize a screenshot before sending it, the model returns click coordinates in the display resolution you specified. You must scale these back to your actual screen resolution before executing the click:

```python
# Your screen is screen_w x screen_h
# You sent a screenshot resized to display_w x display_h
scale_x = screen_w / display_w
scale_y = screen_h / display_h

screen_x = int(api_returned_x * scale_x)
screen_y = int(api_returned_y * scale_y)
```

This is straightforward but critical, because if you forget to scale or `display_width_px` / `display_height_px` don't match the actual dimensions of the image you sent, every click will be consistently offset

### Content ordering in the messages array

When constructing your messages content array, place the text instruction *before* the image, as depicted in the code snippet below. This lets the model know what it's looking for as it processes the screenshot, which improves click accuracy.

```python
# RECOMMENDED — text instruction first, then screenshot:
content = [
    {"type": "text", "text": "Click on the Submit button"},
    {"type": "image", "source": {"type": "base64", "media_type": "image/png", "data": screenshot_b64}},
]

# NOT RECOMMENDED — image first, then text:
content = [
    {"type": "image", "source": {"type": "base64", "media_type": "image/png", "data": screenshot_b64}},
    {"type": "text", "text": "Click on the Submit button"},
]
```

## Diagnosing click issues

If clicks are missing their targets, it often boils down to one of the causes, below:

| Symptom | Likely causes | Try this |
|---|---|---|
| Clicks consistently offset in one direction | `display_width_px` / `display_height_px` don't match the actual image dimensions sent<br>Screenshot exceeds API limits and is being silently downscaled<br>Content ordering is image-first instead of text-first | Ensure display dimensions exactly match your resized screenshot, not your native resolution<br>Pre-downscale to 1280x720 or use `compute_max_api_fit`<br>Move text instruction before the image in the content array |
| Clicks land in roughly the right area but miss the target | Target is very small (checkbox, icon, toggle)<br>Source image was very high resolution (4K+) and detail was lost during downscaling<br>Aspect ratio distortion from forcing a non-native aspect ratio | Enable `enable_zoom: True` for dense UIs<br>Capture at a lower DPI or crop to the relevant screen region before downscaling<br>Preserve the source aspect ratio when resizing |
| Model clicks the wrong element entirely | Ambiguous instruction ("click Submit" when multiple submit-like buttons exist)<br>Visually similar elements near the target<br>UI is too complex for a single instruction | Use more specific prompts with positional context ("click the blue Submit button in the bottom-right of the form")<br>Break complex interactions into smaller steps<br>Provide additional context about the page layout |
| Accuracy is poor across the board | Screenshots are being sent above API limits<br>Source images are from very high-resolution displays (4K+) with extreme compression ratios<br>Resolution is too low, losing critical detail | Pre-downscale all screenshots to fit within limits<br>For 4K+ sources on the 4.6 family, Sonnet is more robust to heavy downscaling than Opus 4.6. On Opus 4.7 this gap largely closes, use the 4.7 pixel budget (up to 3.75 MP) so less downscaling is needed in the first place.<br>Try 1280x720 as a baseline; if too lossy, use `compute_max_api_fit` |

## Model selection for clicking tasks

Based on our internal testing, Claude Sonnet 4.6 tends to be more mechanically precise at clicking (better spatial accuracy, fewer near misses) while Claude Opus 4.6 brings stronger reasoning. Sonnet 4.6 is also more robust when source images require heavy downscaling.

Opus 4.7 narrows this gap: Through testing, we have found its clicking precision is roughly on par with Sonnet 4.6, and its higher resolution budget reduces the amount of downscaling needed in the first place, making it a strong choice when you want Opus-level reasoning paired with strong click accuracy.

For most tasks, we recommend starting with Sonnet 4.6, which provides the best balance of clicking accuracy, reasoning, and cost. Choose Opus 4.7 when you want stronger reasoning, particularly if using high-resolution source images. Haiku 4.5 remains an excellent option when latency is the priority. Advanced workflows may still benefit from an orchestrator + sub-agent pattern where a reasoning model handles planning and decision-making while Sonnet or Haiku executes the mechanical clicking steps.

## Handling small targets

Click accuracy degrades as targets get smaller. Large and medium UI elements (buttons, input fields, and standard menu items) are reliable across all resolutions within the safe zone. The challenge is with small and tiny targets, like checkboxes, system tray icons, dropdown arrows, small toggle switches, and tree view expand/collapse buttons.

If your application involves clicking small targets frequently, consider these strategies:

**Use zoom for dense UIs.** Claude 4.6 and 4.7 models support a zoom capability that lets the model inspect specific screen regions at higher resolution before clicking. Enable it in your tool configuration:

```json
{
    "type": "computer_20251124",
    "name": "computer",
    "display_width_px": 1280,
    "display_height_px": 720,
    "enable_zoom": true
}
```

**Make targets larger.** If you control the UI being automated, increasing the size of click targets (even modestly) has a disproportionate impact on reliability. This might mean using a lower system DPI, zooming in the browser, or adjusting UI scaling settings.

**Use keyboard alternatives for tiny targets.** For very small elements, such as system tray icons or tiny checkboxes), keyboard shortcuts or tab-based navigation can be more reliable than clicking. If your workflow allows it, prompting the model to use keyboard interactions for specific steps can improve success rates.

**Consider source image resolution.** Screenshots from 4K+ displays that get compressed down to 720p lose significant detail (for example, a 16px checkbox at 3840x2160 native becomes roughly 5px at 1280x720 display resolution, which makes the target much smaller and therefore more difficult to hit). If you're working with very high-resolution displays, consider using Opus 4.7, which has a higher resolution limit than previous models. If using 4.6 models, consider capturing at a lower DPI, using display scaling to enlarge UI elements, or focusing the screenshot on the relevant portion of the screen rather than the full display. Because these models represent more information with less pixels, we've observed that performance degrades as source image scale increases, meaning more compression is needed.

---

**关键信息摘要：**

- **来源层级**: Tier 1 - Anthropic官方技术博客
- **核心议题**: Computer Use点击精度优化最佳实践
- **关键发现**: 分辨率和缩放是影响点击精度的最主要因素
- **API限制**:
  - Claude 4.6 family: 最大长边1568px, 最大像素1.15MP
  - Opus 4.7: 最大长边2576px, 最大像素3.75MP
- **推荐分辨率**: 1280x720作为默认, Opus 4.7推荐1080p
- **坐标缩放**: 必须将API返回坐标缩放回原始屏幕分辨率
- **内容顺序**: 文本指令应在图片之前发送
- **模型选择**: Sonnet 4.6更适合点击任务, Opus 4.7提供更强推理能力
- **小目标处理**: 启用zoom功能、增大目标尺寸、使用键盘替代方案