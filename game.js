$(document).ready(function() {
  var attackerChosen = false;
  var defenderChosen = false;

  // Game Music
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

    var audioElement2 = document.createElement("audio");
      audioElement2.setAttribute("src", "lightsaber.mp3");

  $('.aButton').on('click', function() {
    alert('Opponent has been attacked');
    console.log('This is where the scoring is supposed to be... but it\'s fucking hard...');
      // The lightsaber audio is played when the attack button is clicked
      audioElement2.play();
      
  }) 
  })
});



// Other ideas

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








