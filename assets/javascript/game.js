$(document).ready(function() {
  

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

var hero = "";
var enemy = "";

var attackerChosen = false;
var defenderChosen = false;

$(".jarJar").on("click", function() {
  if(attackerChosen == false){
   $(this).appendTo("#attack");
      
      alert("Choose an opponent!");
      hero = binks;
      console.log(hero);
      attackerChosen = true;
      $("div.lukeS").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.dVader").addClass("foe");
      $(".jarPoints").addClass('hero-text');
      $(".hero-text").text(binks.HP);
    }});

$(".lukeS").on("click", function() {
   if(attackerChosen == false){
   $(this).appendTo("#attack");
      
      alert("Choose an opponent!");
      hero = luke;
      console.log(hero);
      attackerChosen = true;
      $("div.jarJar").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.dVader").addClass("foe");
      $(".lukePoints").addClass('hero-text');
      $(".hero-text").text(luke.HP);
    }});

$(".reyU").on("click", function() {
   if(attackerChosen == false){
   $(this).appendTo("#attack");
      
      alert("Choose an opponent!");
      hero = rey;
      console.log(hero);
     attackerChosen = true;
      $("div.lukeS").addClass("foe");
      $("div.jarJar").addClass("foe");
      $("div.dVader").addClass("foe");
      $(".reyPoints").addClass('hero-text');
      $(".hero-text").text(rey.HP);
    }});

$(".dVader").on("click", function() {
   if(attackerChosen == false){
   $(this).appendTo("#attack");
      
      alert("Choose an opponent!");
      hero = vader;
      console.log(hero);
      attackerChosen = true;
      $("div.lukeS").addClass("foe");
      $("div.reyU").addClass("foe");
      $("div.jarJar").addClass("foe");
      $(".vaderPoints").addClass('hero-text');
      $(".hero-text").text(vader.HP);
    }});

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
      $(".enemy-text").text(binks.HP);
    }
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
      $(".enemy-text").text(luke.HP);
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
      $(".enemy-text").text(rey.HP);
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
      $(".enemy-text").text(vader.HP);
    }
});

      var audioElement2 = document.createElement("audio");
      audioElement2.setAttribute("src", "assets/audio/lightsaber.mp3");

  $('.aButton').click(function() {
    alert('Opponent has been attacked');
      $('.hero-text').text(hero.HP = hero.HP - enemy.DEF);
      $('.enemy-text').text(enemy.HP = enemy.HP - hero.DEF);
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





