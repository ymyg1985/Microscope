var initiator;
Iron.Location.onGo(function() {
  initiator = 'click'
});
Iron.Location.onPopState(function() {
  initiator = 'back'
});

Template.layout.transition = function() { return function(from, to, element) {
  return initiator === 'back' ? 'left-to-right' : 'right-to-left';
} }