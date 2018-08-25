// Crystal Collector //

//Make four buttons with on click event ( working in console log! )
$(document).ready(function() {
    $("#Crystal-1").on("click", function() {          
        console.log("Crystal-1")
    })
})    

$(document).ready(function() {
    $("#Crystal-2").on("click", function() {          
        console.log("Crystal-2")
    })
})   

$(document).ready(function() {
    $("#Crystal-3").on("click", function() {          
        console.log("Crystal-3")
    })
})  

$(document).ready(function() {
    $("#Crystal-4").on("click", function() {          
        console.log("Crystal-4")
    })
})   

//player is shown random number at start of every game (having trouble figuring out pathway for the prepend stuff, math stuff is prob wrong too)
$(document).ready(function() {
    $("randomNum-button").on("click", function() {
        var NumToGuess = "";
        for (var i = 0; i < 120; i++) {
        var random = Math.floor(Math.random() *120) + 1;

    NumToGuess = random + NumToGuess;

        
    }
    $("randomNum-button").prepend(<h2></h2> + NumToGuess);
});

});

//make random number generator for number for 4 crystals and number for player to match


// on click, random number is added to players total score (ON CLICK UPDATE PLAYERS SCORE)

//add (win to win) or (loss to loss) if player matches/does not match random number from start of game

// he game automatically restarts when player wins or loses

//make sure random number shows to player at start of each game and crystals should have new random numbers on click

//Keep random number shown to player between 19-120 and each crystal should have hidden value between 1-12



