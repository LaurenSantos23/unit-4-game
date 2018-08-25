// Crystal Collector //

//Make four buttons with on click event ( working in console log! )
$(document).ready(function() {
    var random = Math.floor(Math.random() * (120-19+ 1) + 19);
        console.log(random);
        $("#scoreToMatch").append(random);

// Random numbers assigned to my crystal pictures// 
     var firstCrystalNum = Math.floor(Math.random() * 12 + 1);
        

    var secondCrystalNum = Math.floor(Math.random() * 12 + 1);
     

    var thirdCrystalNum = Math.floor(Math.random() * 12 + 1);
       

    var fourthCrystalNum = Math.floor(Math.random() * 12 + 1);
     

    var userGuess = 0;  


// on click event for my images of crystals//
    $("#Crystal-1").on("click", function() {  
        userGuess += firstCrystalNum        
        $("#totalScore").text(userGuess)
    });

    $("#Crystal-2").on("click", function() {          
        userGuess += secondCrystalNum        
        $("#totalScore").text(userGuess)
    });

    $("#Crystal-3").on("click", function() {          
        userGuess += thirdCrystalNum        
        $("#totalScore").text(userGuess) 
    });

    $("#Crystal-4").on("click", function() {          
        userGuess += fourthCrystalNum        
        $("#totalScore").text(userGuess)
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


//add (win to win) or (loss to loss) if player matches/does not match random number from start of game


// The game automatically restarts when player wins or loses





