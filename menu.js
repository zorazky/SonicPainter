var FizzyText = function() {
  this.message = 'dat.gui';
  this.alpha = 5;
  this.saving = function() {

    save('myCanvas.jpg');

  };

};

window.onload = function() {
  var text = new FizzyText();
  var gui = new dat.GUI();

  gui.add(text, 'message', [ 'sbrush1', 'sbrush2', 'sbrush3', 'sbrush4', 'sbrush5', 'sbrush6', 'sbrush7', 'sbrush8', 'sbrush9', 'sbrush10' ] ).onChange(function(newValue) {
    selectedBrush = newValue;
    console.log("Value changed to:  ", selectedBrush);
  });

  gui.add(text, 'alpha', 0, 50).onChange(function(newValue) {
    alpha = newValue;
    console.log("Value changed to:  ", newValue);
  });

  gui.add(text, 'saving');





};
