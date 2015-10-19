(function() {
  var observer = new MutationObserver(function(mutations) {
    if ($("#pull_request_body").length > 0) {
      console.log("1");
    }
    else {
      console.log("2");
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
