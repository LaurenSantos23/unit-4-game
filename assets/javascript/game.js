// Crystal Collector //

//Make four buttons with on click event ( working in console log! )
$(document).ready(function() {
    var scoreToMatch = Math.floor(Math.random() * (120-19+ 1) + 19);
        console.log(scoreToMatch);
        $("#scoreToMatch").append(scoreToMatch);

// Random numbers assigned to my crystal pictures// 
     var firstCrystalNum = Math.floor(Math.random() * 12 + 1);
    var secondCrystalNum = Math.floor(Math.random() * 12 + 1);
    var thirdCrystalNum = Math.floor(Math.random() * 12 + 1);
    var fourthCrystalNum = Math.floor(Math.random() * 12 + 1);
     
    var totalScore = 0;
    var wins =0;
    var losses= 0;


// on click event for my images of crystals//
    $("#Crystal-1").on("click", function() {  
        totalScore += firstCrystalNum        
        $("#totalScore").text(totalScore)
    });

    $("#Crystal-2").on("click", function() {          
        totalScore += secondCrystalNum        
        $("#totalScore").text(totalScore)
    });

    $("#Crystal-3").on("click", function() {          
        totalScore += thirdCrystalNum        
        $("#totalScore").text(totalScore) 
    });

    $("#Crystal-4").on("click", function() {          
        totalScore += fourthCrystalNum        
        $("#totalScore").text(totalScore)
    });

    //add (win to win) or (loss to loss) if player matches/does not match random number from start of game (I want to move the win or loss to the right div and add ++1 each time)
 
    //on every click on body
   $("body").on("click", function() {
       //check if you won
     if (totalScore === scoreToMatch) {
        wins++;
        $("#wins").text(wins)
        resetGame();

     }
      
      //check if you lost
       if (totalScore > scoreToMatch) {
        losses++;
        $("#losses").text(losses)
        resetGame();
       }
   });


 function resetGame() {
    scoreToMatch = Math.floor(Math.random() * (120-19+ 1) + 19);
    console.log(scoreToMatch);
    $("#scoreToMatch").text("Score to match: " + scoreToMatch);
  totalScore = 0;
 }


})    //closes document.ready   





// The game automatically restarts when player wins or loses


//player is shown random number at start of every game (having trouble figuring out pathway for the prepend stuff, math stuff is prob wrong too)
// $(document).ready(function() {
//     $("randomNum-button").on("click", function() {
//         var NumToGuess = "";
//         for (var i = 0; i < 120; i++) {

//     NumToGuess = random + NumToGuess;

        
//     }
//     $("randomNum-button").prepend("<h2>NumToGuess</h2>");
// });

// });


