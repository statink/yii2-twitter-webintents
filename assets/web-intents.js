"use strict";

/*! Copyright (C) Twitter https://dev.twitter.com/web/intents */
(function (window, document) {
  if (window.__twitterIntentHandler) {
    return;
  }
  var intentRegex = /twitter\.com\/intent\/(\w+)/;
  var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes';
  var width = 550;
  var height = 420;
  var winHeight = screen.height;
  var winWidth = screen.width;
  var handleIntent = function handleIntent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var m;
    var left;
    var top;
    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }
    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round(winWidth / 2 - width / 2);
        top = 0;
        if (winHeight > height) {
          top = Math.round(winHeight / 2 - height / 2);
        }
        window.open(target.href, 'intent', "".concat(windowOptions, ",width=").concat(width, ",height=").concat(height, ",left=").concat(left, ",top=").concat(top));
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  };
  if (document.addEventListener) {
    document.addEventListener('click', handleIntent, false);
  } else if (document.attachEvent) {
    document.attachEvent('onclick', handleIntent);
  }
  window.__twitterIntentHandler = true;
})(window, document);
