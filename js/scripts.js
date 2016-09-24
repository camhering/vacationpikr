var yourSpot = function(beer, outfit, food, weather, travel) {
  if (beer === "pilsner" && outfit === "jeans and sweater") {
    return "Canon beach";
  }
  else if (beer === "ipa" && outfit === "shorts and flip flops") {
    return "Kauai";
  }
  else if (weather === "sun" && travel === "boat") {
    return "Vietnam";
  }
  else if (beer === "lager" && food === "pizza") {
    return "Portland, OR"
  }
  else if (beer === "ipa") {
    return "Bend, OR"
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
