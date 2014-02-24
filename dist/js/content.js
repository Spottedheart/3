var el = document.querySelectorAll('head link[rel*="icon"]');

// Remove existing favicons
Array.prototype.forEach.call(el, function (node) {
    node.parentNode.removeChild(node);
});

var icon = chrome.extension.getURL('/img/favicon.ico');

// Create new favicon
var link      = document.createElement('link');
link.type = 'image/x-icon';
link.rel  = 'icon';
link.href = icon;

document.getElementsByTagName('head')[0].appendChild(link);
