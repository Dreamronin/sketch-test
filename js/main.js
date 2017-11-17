$(function () {
  var drawpad = $('#sketchBox');
  var padWidth = $(drawpad).width();
  var pixNum = 0;
  //initialize pixels at 16x16
  pixNum = 16;
  //Calculate pixel dimensions
  function pixDim() {
    return padWidth / pixNum + 'px';
  }
  //Draw Pixels in #sketchBox
  function pixDraw() {
    for (let i = 1; i <= pixNum * pixNum; i++) {
      drawpad.append('<div class="pixel"></div>');
    }
    $('.pixel').css({
      'height': pixDim(),
      'width': pixDim()
    });
  }

  pixDraw();

  //Buttons
  $('#reset').click(function () {
    drawpad.empty();
    let enterpix = function () {
      let pixels = window.prompt('How many pixels?', 16);
      if ($.isNumeric(pixels)) {
        pixNum = pixels;
      } else {
        window.alert('Please enter a number');
        enterpix();
      }
    };
    enterpix();
    pixDim();
    pixDraw();
  });

  $('#inkBlack').click(function () {
    $('.pixel').mouseenter(function () {
      $(this).css('background-color', 'black');
    });
  });

  $('#inkColor').click(function () {
    $('.pixel').mouseenter(function () {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      $(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    });
  });
});
