var fgimage=null;
var bgimage=null;
function loadForegroundImage(){
  var canvas1 = document.getElementById("cns1");
  var fginput = document.getElementById("fgfile");
  fgimage = new SimpleImage(fginput);
  fgimage.drawTo(canvas1);
}

function loadBackgroundImage(){
  var canvas2 = document.getElementById("cns2");
  var bginput = document.getElementById("bgfile");
  bgimage = new SimpleImage(bginput);
  bgimage.drawTo(canvas2);
}

function goGreen(){
  if( fgimage == null || !fgimage.complete()){
    alert("Foreground not loaded.");
    return;
  }
  if( bgimage == null || !bgimage.complete()){
    alert("Background not loaded.");
    return;
  }
  var output = new SimpleImage(fgimage.getWidth(), fgimage.getHeight());
  var canvas1 = document.getElementById("cns1");
  var context1 = canvas1.getContext("2d");
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
  var canvas2 = document.getElementById("cns2");
  var context2 = canvas2.getContext("2d");
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
  for(var pixel of fgimage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if(pixel.getGreen() > pixel.getRed()+pixel.getBlue()){
      var bgPixel = bgimage.getPixel(x,y);
      output.setPixel(x, y, bgPixel);
    }
    else{
      output.setPixel(x,y,pixel);
    }
  }
  output.drawTo(canvas1);
}
function clearCanvas(){
  var canvas1 = document.getElementById("cns1");
  var canvas2 = document.getElementById("cns2");
  var context1 = canvas1.getContext("2d");
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
  var context2 = canvas2.getContext("2d");
  context2.clearRect(0,0,canvas2.width, canvas2.height);
}