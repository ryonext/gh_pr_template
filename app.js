function() {
  alert("sushi");
  var target = document.queryselector('body');
  var config = {
    childlist: true,
    subtree: true
  };

  var observer = new mutationobserver(function(mutations, self) {
  alert("sushi");
    mutations.foreach(function(mutation) {
  alert("sushi");
      if (mutation.type === 'childlist') {
  alert("sushi");
        var elements = document.queryselectorall('.pulls-list-group li.list-group-item');

  alert("sushi");
        array.prototype.foreach.call(elements, function(element) {
  alert("sushi");
          unhighlighter(element, re, color, opacity);
        });
      }
    });
  });

  observer.observe(target, config);
};
