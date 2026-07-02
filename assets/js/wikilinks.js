(function() {
  'use strict';

  var wikiPages = {};
  var baseUrl = document.querySelector('meta[name="baseurl"]') 
    ? document.querySelector('meta[name="baseurl"]').content 
    : (window.WIKI_BASEURL || '');

  function loadWikiIndex() {
    return fetch(baseUrl + '/wiki/pages.json')
      .then(function(r) { return r.json(); })
      .then(function(pages) {
        pages.forEach(function(p) {
          var key = decodeURIComponent(p.name).replace(/\.html?$/, '');
          wikiPages[key] = p.url;
          wikiPages[key.toLowerCase()] = p.url;
          if (p.title) {
            wikiPages[p.title] = p.url;
            wikiPages[p.title.toLowerCase()] = p.url;
          }
        });
        return wikiPages;
      })
      .catch(function() {
        console.warn('Failed to load wiki pages index');
        return {};
      });
  }

  function findPage(name) {
    var decoded = decodeURIComponent(name).trim();
    return wikiPages[decoded] 
      || wikiPages[decoded.toLowerCase()]
      || wikiPages[decoded.replace(/\s+/g, '-')]
      || wikiPages[decoded.toLowerCase().replace(/\s+/g, '-')]
      || null;
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  function processWikilinks(root) {
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          if (node.parentElement && (
            node.parentElement.tagName === 'CODE' ||
            node.parentElement.tagName === 'PRE' ||
            node.parentElement.tagName === 'A' ||
            node.parentElement.closest('code, pre, a, script, style')
          )) {
            return NodeFilter.FILTER_REJECT;
          }
          var text = node.nodeValue;
          return text && text.indexOf('[[') !== -1 && text.indexOf(']]') !== -1
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    var textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach(function(node) {
      var text = node.nodeValue;
      var regex = /\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]/g;
      var match;
      var lastIndex = 0;
      var fragment = document.createDocumentFragment();

      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        }

        var target = match[1].trim();
        var display = match[2] ? match[2].trim() : target;

        var anchor = '';
        var hashIdx = target.indexOf('#');
        if (hashIdx !== -1) {
          anchor = target.slice(hashIdx);
          target = target.slice(0, hashIdx);
        }

        var url = findPage(target);

        if (url) {
          var a = document.createElement('a');
          a.href = url + anchor;
          a.className = 'wikilink';
          a.textContent = display;
          fragment.appendChild(a);
        } else {
          var span = document.createElement('span');
          span.className = 'wikilink wikilink-broken';
          span.title = 'Page not found: ' + target;
          span.textContent = display;
          fragment.appendChild(span);
        }

        lastIndex = regex.lastIndex;
      }

      if (lastIndex > 0) {
        if (lastIndex < text.length) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }
        node.parentNode.replaceChild(fragment, node);
      }
    });
  }

  function addStyles() {
    if (document.getElementById('wikilink-styles')) return;
    var style = document.createElement('style');
    style.id = 'wikilink-styles';
    style.textContent = [
      '.wikilink {',
      '  color: #0366d6;',
      '  text-decoration: none;',
      '  border-bottom: 1px dotted #0366d6;',
      '}',
      '.wikilink:hover {',
      '  text-decoration: underline;',
      '}',
      '.wikilink-broken {',
      '  color: #6a737d;',
      '  border-bottom: 1px dashed #6a737d;',
      '  cursor: help;',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function init() {
    addStyles();
    var content = document.querySelector('.main-content') 
      || document.querySelector('main') 
      || document.body;
    loadWikiIndex().then(function() {
      processWikilinks(content);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
