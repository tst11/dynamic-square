var inputTextValue;
var sqSize;
var canvas = document.getElementById('tutorial1');
var ctx = canvas.getContext('2d');

document.getElementById('bigSquareSize').onkeyup = keyupBig;
document.getElementById('squareSize').onkeyup = keyupMini;

function keyupBig(e) {
  var bigSqSize = Number(e.target.value);
  changeRectSize(bigSqSize);
}

function keyupMini(e) {
  inputTextValue = Number(e.target.value);
  ctx.clearRect(0,0,sqSize,sqSize);
  ctx.fillRect(0,0,sqSize,sqSize);
  drawSquares(inputTextValue);
}


function changeRectSize(size){
  sqSize = size;
  document.getElementById('tutorial1').setAttribute("width", sqSize);
  document.getElementById('tutorial1').setAttribute("height", sqSize);
  ctx.fillStyle = 'rgb(200,0,0)';
  if(sqSize <= 800 && sqSize > 0){
    ctx.clearRect(0,0,sqSize,sqSize);
    ctx.fillRect(0,0,sqSize,sqSize);
  } else if(sqSize <= 0){
    ctx.clearRect(0,0,sqSize,sqSize);
  }
}

function drawSquares(size){
  var repeatValue = sqSize/(2+size);
    if(size !== 0){
      var c = 2;
      for(var j = 0; j <= repeatValue; j++){
        var a = 2;
        var b = size;
        var d = 1

        for(var i = 1; i <= repeatValue; i++){
          ctx.clearRect(a,c,b,b);
          a = a+(d*2)+b;
        }
        c += b +2;
      }
    } else{
      ctx.fillStyle = 'rgb(200,0,0)';
      ctx.fillRect(10,10,sqSize,sqSize);
    }
}
