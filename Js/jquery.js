$(document).ready(function (){
/*the Show Button*/
  $("#show").click(function (){
    $("#abber").slideDown(1000);
  });
/*the Show Back Face*/
  $(".de").click(function (){
    $("#face2").hide(1000, function (){
      $("#back2").show(1000);
    });
  });
  $(".deB").click(function (){
    $("#faceB").hide(1000, function (){
      $("#backB").show(1000);
    });
  });
  $(".deD").click(function (){
    $("#faceD").hide(1000, function (){
      $("#backD").show(1000);
    });
  });
/*the Show Button*/
  $("#back-bu").click(function (){
    $("#back2").hide(1000, function (){
      $("#face2").show(1000);
    });
  });
  $("#back_buB").click(function (){
    $("#backB").hide(1000, function (){
      $("#faceB").show(1000);
    });
  });
  $("#back-buD").click(function (){
    $("#backD").hide(1000, function (){
      $("#faceD").show(1000);
    });
  });
/*the Show Button*/
});
