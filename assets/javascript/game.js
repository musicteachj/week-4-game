$(document).ready(function() {
  var attackerChosen = false;
  var defenderChosen = false;

  $('.aButton').hide();

  // Game Music
  var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/audio/StarWarsTheme.m4a");
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
  HP:201,
  AP: 15,
  baseAP: 10,
  DEF: 15,
};

var luke = {
  HP:151,
  AP: 20,
  baseAP: 7,
  DEF: 15,
};

var rey = {
  HP:51,
  AP: 14,
  baseAP: 12,
  DEF: 15,
};

var vader = {
  HP:101,
  AP: 17,
  baseAP: 11,
  DEF: 15,
};

var hero
var enemy

$(".jarJar").on("click", function() {
  if(attackerChosen == false){
   $(this).appendTo("#attack");
      
      alert("Choose an opponent!");
      hero = binks;
      console.log(hero);
     
      $("div.lukeS").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.dVader").addClass("foe");
      $(".jarPoints").addClass('hero-text');
      $(".jarPoints").text(binks.HP);
    }});

$(".lukeS").on("click", function() {
   if(attackerChosen == false){
   $(this).appendTo("#attack");
      
      alert("Choose an opponent!");
      hero = luke;
      console.log(hero);
      
      $("div.jarJar").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.dVader").addClass("foe");
      $(".lukePoints").addClass('hero-text');
      $(".lukePoints").text(luke.HP);
    }});

$(".reyU").on("click", function() {
   if(attackerChosen == false){
   $(this).appendTo("#attack");
      
      alert("Choose an opponent!");
      hero = rey;
      console.log(hero);
     
      $("div.lukeS").addClass("foe");
      $("div.jarJar").addClass("foe");
      $("div.dVader").addClass("foe");
      $(".reyPoints").addClass('hero-text');
      $(".reyPoints").text(rey.HP);
    }});

$(".dVader").on("click", function() {
   if(attackerChosen == false){
   $(this).appendTo("#attack");
      
      alert("Choose an opponent!");
      hero = vader;
      console.log(hero);
      
      $("div.lukeS").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.jarJar").addClass("foe");
      $(".vaderPoints").addClass('hero-text');
      $(".vaderPoints").text(vader.HP);
    }});

// $(".jarJar").on("click", function() {
//   if(attackerChosen = true){
//     $(this).appendTo("#defend");
//   };
// });

$(".jarJar").on("click", function() {
  if ($(this).hasClass("foe")){
      $(this).appendTo("#defend");
      defenderChosen = true;
      enemy = binks;
      console.log(hero);
      console.log(enemy);
      $(".jarPoints").addClass('enemy-text');
      alert("You are now ready to attack!");
      $('.aButton').show();
    }


  //       var audioElement2 = document.createElement("audio");
  //     audioElement2.setAttribute("src", "assets/audio/lightsaber.mp3");

  // $('.aButton').on('click', function() {
  //   alert('Opponent has been attacked');
  //   console.log('This is where the scoring is supposed to be... but it\'s hard...');
  //     // The lightsaber audio is played when the attack button is clicked
  //     audioElement2.play();
      
  // });




});

$(".lukeS").on("click", function() {
  if ($(this).hasClass("foe")){
      $(this).appendTo("#defend");
      defenderChosen = true;
      enemy = luke;
      console.log(hero);
      console.log(enemy);
      $(".lukePoints").addClass('enemy-text');
      alert("You are now ready to attack!");
      $('.aButton').show();
    }
});

$(".reyU").on("click", function() {
  if ($(this).hasClass("foe")){
      $(this).appendTo("#defend");
      defenderChosen = true;
      enemy = rey;
      console.log(hero);
      console.log(enemy);
      $(".reyPoints").addClass('enemy-text');
      alert("You are now ready to attack!");
      $('.aButton').show();
    }
});

$(".dVader").on("click", function() {
  if ($(this).hasClass("foe")){
      $(this).appendTo("#defend");
      defenderChosen = true;
      enemy = vader;
      console.log(hero);
      console.log(enemy);
      $(".vaderPoints").addClass('enemy-text');
      alert("You are now ready to attack!");
      $('.aButton').show();
    }
});

        var audioElement2 = document.createElement("audio");
      audioElement2.setAttribute("src", "assets/audio/lightsaber.mp3");

  $('.aButton').click(function() {
    alert('Opponent has been attacked');
      hero.HP = hero.HP - enemy.DEF;
      enemy.HP = enemy.HP - hero.DEF;
      // // hero.AP=hero.AP+hero.baseAP;
      // // hero.HP = hero.HP - enemy.DEF;
      // console.log(hero.HP - enemy.DEF);
      console.log(hero);
      // $(".hero-text").text(hero.HP);
      // // enemy.HP = enemy.HP - hero.AP;
      console.log(enemy);
      // $(".enemy-text").text(enemy.HP);
      // The lightsaber audio is played when the attack button is clicked
      audioElement2.play();
      
  });


});// End of Doc





