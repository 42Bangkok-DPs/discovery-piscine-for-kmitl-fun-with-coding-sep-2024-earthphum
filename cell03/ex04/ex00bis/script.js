$(document).ready(function() {
  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  $("#colorButton").on('click', function() {
    const randomColor = getRandomColor();
    $('body').css('background-color', randomColor);
  });
});
