(function() {
  var flag = 0
  var observer = new MutationObserver(function(mutations) {
    if ($("#pull_request_body").length > 0 && flag == 0) {
      console.log("1");
      flag = 1;
      $("#pull_request_body").text("## Background\n\n## Changes\n\n## See also");
    }
    else {
      console.log("2");
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
