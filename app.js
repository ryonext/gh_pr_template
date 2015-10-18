(function() {
  var observer = new MutationObserver(function(mutations) {
    alert("sushi");
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
