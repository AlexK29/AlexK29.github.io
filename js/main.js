var colorMap = {
    "#inform": ["#C33764", "#1D2671"],
    "#educate": ["#F7971E", "#FFD200"],
    "#argue": ["#ee0979", "#ff6a00"],
    "#inspire": ["#4B79A1", "#283E51"]
}

$(document).ready(function() {
  console.log("#manifesto .background-change");
    $("#manifesto .background-change").hover(
        function() {
          savedColor = $(this).css('color');
          $('body').css({
              //background: "-webkit-gradient(linear, left top, left bottom, from(" + colorArray[0] +
              //    "), to(" + colorArray[1] + "))"
              background: savedColor
          });
          $(this).css({
              //background: "-webkit-gradient(linear, left top, left bottom, from(" + colorArray[0] +
              //    "), to(" + colorArray[1] + "))"
              color: 'white'
          });
        },
        function() {
          $('body').css({
              //background: "-webkit-gradient(linear, left top, left bottom, from(" + colorArray[0] +
              //    "), to(" + colorArray[1] + "))"
              background: 'white'
          });
          $(this).css({
              //background: "-webkit-gradient(linear, left top, left bottom, from(" + colorArray[0] +
              //    "), to(" + colorArray[1] + "))"
              color: savedColor
          });
        }
    );

    var $target = $('body');
    inView('section').on('enter', function(el){
      var color = $(el).attr('data-background-color');
      $target.css('background-color', color );
    });
});
