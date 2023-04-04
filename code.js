let playerChoice;
let computerChoice;
const playerImage=document.getElementById("your-img");
playerImage.setAttribute("class","img-left");
const computerImage=document.getElementById("comp-img");
computerImage.setAttribute("class","img-right");

function bunnyChoice()
{
    playerImage.setAttribute("src","bunny.GIF");
    playerChoice=1;

    compChoice();
    determineWinner(playerChoice,compChoice());
}
function carrotChoice()
{
    playerImage.setAttribute("src","carrot.GIF");
    playerChoice=2;

    compChoice();
    determineWinner(playerChoice,compChoice());

}
function gunChoice()
{
    playerImage.setAttribute("src","gun.GIF");
    playerChoice=3;

    compChoice();
    determineWinner(playerChoice,compChoice());
}

function compChoice()
{
    computerChoice=Math.floor( Math.random() * 4 );

    if(computerChoice===1)
    {
        bunnyCompChoice();
    }
    else if(computerChoice===2)
    {
        carrotCompChoice();
    }
    else
    {
        gunCompChoice();
    }
    return computerChoice;   
}


function bunnyCompChoice()
{
    computerImage.setAttribute("src","bunny.GIF");
}
function carrotCompChoice()
{
    computerImage.setAttribute("src","carrot.GIF");
}
function gunCompChoice()
{
    computerImage.setAttribute("src","gun.GIF");
}

function determineWinner(playerChoice,computerChoice)
{
    //document.getElementById("game");
    let winnerMessage=document.createElement("h2");
    winnerMessage.setAttribute("id","winner-message");
    
    if(playerChoice===computerChoice)
    {
        document.getElementById("winner-message").innerHTML="TIE";
    }
    else if(playerChoice===1&&computerChoice===2)
    {
        document.getElementById("winner-message").innerHTML="Bunny eats Carrot: YOU WON!";
    }
    else if(playerChoice===2&&computerChoice===3)
    {
        document.getElementById("winner-message").innerHTML="Carrot plugs Gun: YOU WON!";
    }
    else if(playerChoice===3&&computerChoice===1)
    {
        document.getElementById("winner-message").innerHTML="Gun shoots Bunny: YOU WON!";
    }
    else if(playerChoice===1&&computerChoice===3)
    {
        document.getElementById("winner-message").innerHTML="Bunny gets shot by Gun: YOU LOST:(";
    }
    else if(playerChoice===2&&computerChoice===1)
    {
        document.getElementById("winner-message").innerHTML="Carrot gets eaten by Bunny: YOU LOST:(";
    }
    else if(playerChoice===3&&computerChoice===2)
    {
        document.getElementById("winner-message").innerHTML="Gun gets plugged by Carrot: YOU LOST:(";
    }
    
    document.getElementById("choose-option").replaceChild(winnerMessage);
}

document.getElementById("bunny-choice").addEventListener("click", bunnyChoice);
document.getElementById("carrot-choice").addEventListener("click", carrotChoice);
document.getElementById("gun-choice").addEventListener("click", gunChoice);