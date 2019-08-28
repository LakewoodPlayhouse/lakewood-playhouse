function animateUp(contents, footer){
  $(contents).css({position: "absolute"});
  $(footer).css('margin-top', $(contents).outerHeight());
  $(footer).animate({ marginTop: '200px'}, 1000);

}

var contentArray = ["contents","column"];
var contentIndex = myStringArray.length;
for (var i = 0; i < contentIndex; i++) {
    //$(contents + " .column div:nth-of-type(2n)").hide();
}

function toggle(id){
  hide(id);
}

function show(id){
  document.getElementsByClassName(id).style.display = "block";
}
function hide(id){
  var element = document.getElementsByClassName(id);
  element[0].style.position = "absolute";
}

function animateHide(Hiding, Animating){
  var hiddenElement = document.getElementsByClassName(Hiding);

  var initLocation = Animating.getBoundingClientRect();
  var finalLocation = hiddenElement.getBoundingClientRect();
}
