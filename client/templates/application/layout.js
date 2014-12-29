Template.layout.helpers({
  transition: function() { return function(from, to, element) {
    if (to.template === 'PostPage')
      return 'right-to-left';
    else if (from.template === 'PostPage')
      return 'left-to-right';
    else
      return 'none';
  } }
});