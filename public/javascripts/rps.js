$(document).ready(function(){

var rpsLogic = ['rock', 'paper','scissors'];
var playerScore = 0;
var computerScore =0;
var tieScore = 0;
var roundCount = 0;
var timer=0;

intro();

//Game Function
function gameState(rounds, player){

  shakeHands();
  if(roundCount < rounds){
    var computer = computerInput();
    var result = compareInputs(player,computer);
    scoreCount(result, 1);
    if(result!==0){
      roundCount++;
      $('#rounds').html(roundCount);
    }

  }
  else if (roundCount>=rounds){
    if(playerScore>computerScore){
      $('#graphic-user').remove();
      $('#graphic-user').append('<img class="responsive-img slideRight bounce" id="winner-image" src="public/images/rps-img/winner.png">');
      swal('You won! Scoring ' +playerScore+ ' victories' );
    }
    else if (playerScore<computerScore){
      $('#graphic-user').remove();
      $('#graphic-computer').append('<img class="responsive-img slideLeft bounce" id="computer-winner" src="public/images/rps-img/winner2.png">');
      swal('CPU won. Scoring '+computerScore+' victories');
    }
 $('.game').on('click',function(){
  location.reload();
});

  }
}

//player Input
function userPicks(){
  $('.game').on('click',function(){
    fadeImage();
    var userInput = $(this).attr('value');
    if (userInput==='rock') {
      $('#graphic-user').append('<img class="user-image responsive-img pullDown" src="public/images/rps-img/rock-user.png">');
    }
    if (userInput==='paper') {
      $('#graphic-user').append('<img class="user-image responsive-img pullDown" src="public/images/rps-img/paper-user.png">');
    }
    if (userInput==='scissors') {
      $('#graphic-user').append('<img class="user-image responsive-img pullDown" src="public/images/rps-img/scissor-user.png">');
    }

    gameState(5, userInput);
  });

 }
 userPicks();


//computer logic
function computerInput(){
  var cpuInput =  Math.floor(Math.random() * rpsLogic.length);
  console.log(cpuInput);
  if (cpuInput===0){
     $('#graphic-computer').append('<img class="user-image responsive-img pullUp" src="public/images/rps-img/rock.png">');
    return 'rock';
  }
   if (cpuInput===1){
    $('#graphic-computer').append('<img class="user-image responsive-img pullUp" src="public/images/rps-img/paper.png">');
    return 'paper';
  }
    if (cpuInput===2){
      $('#graphic-computer').append('<img class="user-image responsive-img pullUp" src="public/images/rps-img/scissor.png">');
    return 'scissors';
  }

}

//compare inputs
function compareInputs(input1,input2){
  if(input1 === input2){
    swal("Tie try again");
    return 0;
  }
  if((input1 ==='rock' && input2 === 'scissors')||
     (input1 ==='paper' && input2 === 'rock')||
     (input1 ==='scissors'&& input2 === 'paper'))
    {
      swal('Player Wins!');
      return 1;
    }
    {
      swal('Computer Wins!');
      return 2;
    }
}

//update scores
function scoreCount(result,points){
  if (result===1){
    playerScore +=points;
    $('#myScore').html(playerScore);

  } else if (result===2){
    computerScore += points;
    $('#compScore').html(computerScore);
  } else {
    playerScore += 0;
    computerScore += 0;
    tieScore+=points;
    $('#tieScore').html(tieScore);
  }
};

//fade out images

function fadeImage(){

    $('.user-image').remove();
    $('#explosion').remove();
}

function shakeHands(){
    $(".closed-hands").remove();
}


//intro instructions
function intro(){
  $(window).load(function(){
    swal('Welcome to Rock Paper Scissors. Please select a option below to begin playing best out of five wins!');
  });

}



//clear the scores out
function resetGame(){
  playerScore = 0;
  computerScore = 0;

}



});
