// Crystal Collector //

//Make four buttons with on click event ( working in console log! )
$(document).ready(function() {
    var random = Math.floor(Math.random() * 120) + 1;
        console.log(random);
        $("#scoreToMatch").append(random);

    
     var firstCrystalNum = Math.floor(Math.random() * 11) + 1;
        console.log(random);
        $("#Crystal-1").append(random);

    var secondCrystalNum = Math.floor(Math.random() * 11) + 1;
        console.log(random);
        $("#Crystal-2").append(random);

    var thirdCrystalNum = Math.floor(Math.random() * 11) + 1;
        console.log(random);
        $("#Crystal-3").append(random);
        
    var fourthCrystalNum = Math.floor(Math.random() * 11) + 1;
        console.log(random);
        $("#Crystal-4").append(random);



    $("#Crystal-1").on("click", function() {          
        console.log("Crystal-1")
    });

    $("#Crystal-2").on("click", function() {          
        console.log("Crystal-2")
    });

    $("#Crystal-3").on("click", function() {          
        console.log("Crystal-3")
    });

    $("#Crystal-4").on("click", function() {          
        console.log("Crystal-4")
    });


})       

//player is shown random number at start of every game (having trouble figuring out pathway for the prepend stuff, math stuff is prob wrong too)
$(document).ready(function() {
    $("randomNum-button").on("click", function() {
        var NumToGuess = "";
        for (var i = 0; i < 120; i++) {

    NumToGuess = random + NumToGuess;

        
    }
    $("randomNum-button").prepend("<h2>NumToGuess</h2>");
});

});

//make random number generator for number for 4 crystals and number for player to match


// on click, random number is added to players total score (ON CLICK UPDATE PLAYERS SCORE)

//add (win to win) or (loss to loss) if player matches/does not match random number from start of game

// he game automatically restarts when player wins or loses

//make sure random number shows to player at start of each game and crystals should have new random numbers on click

//Keep random number shown to player between 19-120 and each crystal should have hidden value between 1-12

1
