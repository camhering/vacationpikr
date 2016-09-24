var yourSpot = function(beer, outfit, food, weather, travel) {
  if (beer === "lager" && outfit === "jeans and sweater") {
    return "Canon beach";
  }
  else if (beer === "ipa" && outfit === "shorts and flip flops") {
    return "Kauai";
  }

};

$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var beer = $("select#beer").val();
    var outfit = $("select#outfit").val();
    var food = $("select#food").val();
    var weather = $("select#weather").val();
    var travel = $("select#travel").val();


    var yourspot = yourSpot(beer,outfit,food,weather,travel);
    $("#yourspot").show();
    $("#perfect").text(yourspot);

    event.preventDefault();

  });
});
