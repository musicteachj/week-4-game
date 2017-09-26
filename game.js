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

//   $('.box').on('click', function() {
//     if(!attackerChosen) {
//       $(this).appendTo("#attack");
//       attackerChosen = true;
//       alert("Choose an opponent!");
		     
//     } else {

//       $(this).appendTo("#defend");
//       defenderChosen = true;
//       $("#attack").append("<button class='aButton'> Attack </button>");
//       alert("You are now ready to attack!");
//     }

//     var audioElement2 = document.createElement("audio");
//       audioElement2.setAttribute("src", "lightsaber.mp3");

//   $('.aButton').on('click', function() {
//     alert('Opponent has been attacked');
//     console.log('This is where the scoring is supposed to be... but it\'s fucking hard...');
//       // The lightsaber audio is played when the attack button is clicked
//       audioElement2.play();
      
//   }) 
//   })
// });



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


var binks = {
  HP:200,
  AP: 15,
  baseAP: 10,
  DEF: 15,
};

var luke = {
  HP:150,
  AP: 20,
  baseAP: 7,
  DEF: 15,
};

var rey = {
  HP:50,
  AP: 14,
  baseAP: 12,
  DEF: 15,
};

var vader = {
  HP:100,
  AP: 17,
  baseAP: 11,
  DEF: 15,
};

var hero
var enemy

$(".jarJar").on("click", function() {
   $(this).appendTo("#attack");
      attackerChosen = true;
      alert("Choose an opponent!");
      hero = binks;
      console.log(hero);
      $("div.lukeS").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.dVader").addClass("foe");
    });

$(".lukeS").on("click", function() {
   $(this).appendTo("#attack");
      attackerChosen = true;
      alert("Choose an opponent!");
      hero = luke;
      console.log(hero);
      $("div.jarJar").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.dVader").addClass("foe");
    });

$(".reyU").on("click", function() {
   $(this).appendTo("#attack");
      attackerChosen = true;
      alert("Choose an opponent!");
      hero = rey;
      console.log(hero);
      $("div.lukeS").addClass("foe");
      $("div.jarJar").addClass("foe");
      $("div.dVader").addClass("foe");
    });

$(".dVader").on("click", function() {
   $(this).appendTo("#attack");
      attackerChosen = true;
      alert("Choose an opponent!");
      hero = vader;
      console.log(hero);
      $("div.lukeS").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.jarJar").addClass("foe");
    });

// $(".jarJar").on("click", function() {
//   if(attackerChosen = true){
//     $(this).appendTo("#defend");
//   };
// });

$(".jarJar").on("click", function() {
  if ($(this).hasClass("foe")){
      $(this).appendTo("#defend");
      defenderChosen = true;
      $("#attack").append("<button class='aButton'> Attack </button>");
      alert("You are now ready to attack!");
    }


        var audioElement2 = document.createElement("audio");
      audioElement2.setAttribute("src", "lightsaber.mp3");

  $('.aButton').on('click', function() {
    alert('Opponent has been attacked');
    console.log('This is where the scoring is supposed to be... but it\'s hard...');
      // The lightsaber audio is played when the attack button is clicked
      audioElement2.play();
      
  });




});

$(".lukeS").on("click", function() {
  if ($(this).hasClass("foe")){
      $(this).appendTo("#defend");
      defenderChosen = true;
      $("#attack").append("<button class='aButton'> Attack </button>");
      alert("You are now ready to attack!");
    }
});

$(".reyU").on("click", function() {
  if ($(this).hasClass("foe")){
      $(this).appendTo("#defend");
      defenderChosen = true;
      $("#attack").append("<button class='aButton'> Attack </button>");
      alert("You are now ready to attack!");
    }
});

$(".dVader").on("click", function() {
  if ($(this).hasClass("foe")){
      $(this).appendTo("#defend");
      defenderChosen = true;
      $("#attack").append("<button class='aButton'> Attack </button>");
      alert("You are now ready to attack!");
    }
});




});// End of Doc





