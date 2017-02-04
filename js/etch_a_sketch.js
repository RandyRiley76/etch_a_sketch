var surfaceSize = 500;
var borderSize=1;
var squarePerLine =30;


function makeGrid(squarePerLine){
  var squareSize = (surfaceSize-(squarePerLine*(borderSize*2))) / squarePerLine;
  var totalSquares = squarePerLine * squarePerLine;
  for (var i =0; i<totalSquares;i++){
    $("#surface").append("<div class='sketch_square'></div>");
  }
  $('.sketch_square').css({'height': squareSize+'px', 'width': squareSize+'px'});
}

function tracer(){
  //Darken Squares
  $('.sketch_square').on('mouseenter', function(){
    $(this).addClass("blacken");
  });
}

$(document).ready(function(){
  $('#surface').css({'background-color':'#CCC', 'width': surfaceSize+'px', 'margin':'auto'});
  makeGrid(squarePerLine);
  tracer();
  //Clear Screen
  $('#clear').on('click',function(){
    $('#surface').animate({'left': '-40px'}, 75,function(){
      $('#surface').animate({'left': '80px'},75, function(){
        $('#surface').animate({'left': '0px'}, 150, function(){
          $('.sketch_square').removeClass("blacken");
        });
      });
    });
  });
  //Change Grid
  $('#grid').on('click', function(){
    squarePerLine = prompt("Enter a number between 2 and 30 for how many squares per line", "30");
    if(squarePerLine < 2 || squarePerLine > 30){
      squarePerLine = prompt("Enter a number between 2 and 30 for how many squares per line", "30");
    }
    $('.sketch_square').remove();
    makeGrid(squarePerLine);
    tracer();
  });


});
