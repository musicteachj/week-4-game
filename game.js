$(document).ready(function() {
  var attackerChosen = false;
  var defenderChosen = false;

  var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "StarWarsTheme.m4a");

  $(".theme-button").on("click", function() {
        audioElement.play();
      });
  $(".pause-button").on("click", function() {
        audioElement.pause();
      });

 	alert("Choose your character!");

  $('.box').on('click', function() {
    if(!attackerChosen) {
      $(this).appendTo("#attack");
      attackerChosen = true;
      alert("Choose an opponent!");
		     
    } else {

      $(this).appendTo("#defend");
      defenderChosen = true;
      $("#attack").append("<button class='aButton'> Attack </button>");
      alert("You are now ready to attack!");


    }

  $('.aButton').on('click', function() {
    alert('Opponent has been attacked');
    console.log('This is where the scoring is supposed to be... but it\'s fucking hard...');
  })

    
  })

});





/*

$("#attack").on("click", function() { 
    if(isGameover === false) {
        enemySelected.healthPoints -= characterSelected.attackPower;
        characterSelected.healthPoints -= enemySelected.counterAttackPower;
        $('#' + characterSelected.name + "HP").html("HP: " + characterSelected.healthPoints);
        $('#' + enemySelected.name + "HP").html("HP: " + enemySelected.healthPoints);
        console.log(enemySelected.healthPoints);
    }

});


$("#attack").click(function() {
  enemyHealth -= Math.floor(Math.random() * yourDamagePerMove);
  $("#enemyHealth").html("Enemy Health: " + enemyHealth);
})

*/








