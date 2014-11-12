Template.postsList.rendered = function () {
  this.find('.wrapper')._uihooks = {
    insertElement: function (node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    moveElement: function (node, next) {
      var $node = $(node), $next = $(next);
      var oldTop = $node.offset().top;
      var height = $(node).outerHeight(true);
      
      // find all the elements between next and node
      var $inBetween = $(next).nextUntil(node);
      if ($inBetween.length === 0)
        $inBetween = $(node).nextUntil(next);
      
      // now put node in place
      $(node).insertBefore(next);
      
      // measure new top
      var newTop = $(node).offset().top;
      
      // move node *back* to where it was before
      $(node).css('top', oldTop - newTop).addClass('animate');
      
      // push every other element down (or up) to put them back
      $inBetween.css('top', oldTop < newTop ? height : -1 * height)
        .addClass('animate');
      
      // force a redraw
      $(node).height();
      
      // reset everything to 0 // XXX: could use JQ animation here
      $(node).css('top', 0);
      $inBetween.css('top', 0);
    },
    removeElement: function (node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  }
}