var FizzyText = function() {
  this.message = 'dat.gui';

};

window.onload = function() {
  var text = new FizzyText();
  var gui = new dat.GUI();

  gui.add(text, 'message', [ 'sbrush1', 'sbrush2', 'sbrush3', 'sbrush4', 'sbrush5', 'sbrush6', 'sbrush7', 'sbrush8', 'sbrush9' ] ).onChange(function(newValue) {
    selectedBrush = newValue;
    console.log("Value changed to:  ", selectedBrush);
  });



};
