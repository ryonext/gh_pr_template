(function() {
  var flag = 0
  var observer = new MutationObserver(function(mutations) {
    if ($("#pull_request_body").length > 0 && flag == 0) {
      flag = 1; // Avoid 2 times run.
      $("#pull_request_body").text("## Background\n\n## Changes\n\n## See also");
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
