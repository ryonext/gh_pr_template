//var injectScript;
//
//injectScript = function(file, node) {
//  var s, th;
//  th = document.getElementsByTagName(node)[0];
//  s = document.createElement('script');
//  s.setAttribute('type', 'text/javascript');
//  s.setAttribute('src', file);
//  return th.appendChild(s);
//}
//
//injectScript(chrome.extension.getURL('/embeded-script.js'), 'body')
//  var target = document.querySelector('body');
//  var config = {
//    childList: true,
//    subtree: true
//  };
//
//  var observer = new MutationObserver(function(mutations, self) {
//alert("hoge");
//alert(document.title);
//    mutations.forEach(function(mutation) {
//      if (mutation.type === 'childList') {
//alert("hoge");
//alert(document.title);
//      }
//    });
//  });
//
//  observer.observe(target, config);

var observer = new MutationObserver(function (mutations) {
alert("hoge");
});
observer.observe(document.body, { childList: true, subtree: true });
