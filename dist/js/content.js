;(function(undefined) {
    if ( location.href.indexOf('https://www.google.') !== 0
        && location.href.indexOf('http://www.google.') !== 0
        && location.href.indexOf('http://webcache.googleusercontent.com/') !== 0
        && location.href.indexOf('https://webcache.googleusercontent.com/') !== 0) {
        return;
    }

    var icon = chrome.extension.getURL('/img/favicon.ico');

    // Create new favicon
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel  = 'icon';
    link.href = icon;

    var el = document.querySelectorAll('head link[rel*="icon"]');

    // Remove existing favicons
    Array.prototype.forEach.call(el, function (node) {
        node.parentNode.removeChild(node);
    });

    document.getElementsByTagName('head')[0].appendChild(link);
})();
