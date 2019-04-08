$(document).ready(function (){
  var father      = $(".icons div"),
      ico         = $(".icons div").find("i"),
      animTime    = 1000,
      pxs         = 00,
      timeWait    = 2000;
  function upArrow (){
     ico.animate({
       bottom: pxs + "%"
     },animTime);
  }
  function downArrow (){
    ico.animate({
      bottom: pxs + "%"
    },animTime);
  }
  var clera = setInterval(function (){
    upArrow ()
    pxs = pxs + 100;
    if(pxs == 600){
        pxs = 0;
        downArrow();
    }
  },timeWait);
});
