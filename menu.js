var FizzyText = function() {
  this.message = 'dat.gui';

};

window.onload = function() {
  var text = new FizzyText();
  var gui = new dat.GUI();

  gui.add(text, 'message', [ 'pizza', 'chrome', 'hooray' ] ).onChange(function(newValue) {
  	console.log("Value changed to:  ", newValue);
  });

  

};
