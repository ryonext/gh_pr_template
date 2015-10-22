(function() {
  var observer = new MutationObserver(function(mutations) {
    if ($("#pull_request_body").val() == "") {
      $("#pull_request_body").text("## Background\n\n## Changes\n\n## See also");
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
