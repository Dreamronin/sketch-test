$(function () {
  var pixNum = 0;
  pixNum = 16;
  //Setup Pixel Dimension
  function pixDim() {
    return 960 / pixNum + 'px';
  }
  //Draws Pixels
  function pixDraw() {
    for (let i = 1; i <= pixNum * pixNum; i++) {
      $('.container').append('<div class="pixel"></div>');
    }
    $('.pixel').css({
      'height': pixDim(),
      'width': pixDim()
    });
  }
  //Setup Pencil
  function pencil() {
    $('.pixel').mouseenter(function () {
      $(this).css('background-color', 'black');
    });
  }
  pixDraw();
  pencil();
  //  Button
  $('#reset').click(function () {
    $('.container').empty();
    pixNum = window.prompt('How many pixels?', 16);
    pixDim();
    pixDraw();
    pencil();
  });
});
