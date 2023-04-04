Math.random();

const choicesList = ["Bunny", "Carrot", "Gun"];

let playerChoice;
let computerChoice;
const playerImage=document.getElementById("your-img");
playerImage.setAttribute("class","img-left");
const computerImage=document.getElementById("comp-img");
computerImage.setAttribute("class","img-right");

//Players Choice based on Selection
function bunnyChoice()
{
    playerImage.setAttribute("src","bunny.GIF");
    playerChoice=0;

    compChoice();
    determineWinner(playerChoice,compChoice());
}

function carrotChoice()
{
    playerImage.setAttribute("src","carrot.GIF");
    playerChoice=1;

    compChoice();
    determineWinner(playerChoice,compChoice());

}

function gunChoice()
{
    playerImage.setAttribute("src","gun.GIF");
    playerChoice=2;

    compChoice();
    determineWinner(playerChoice,compChoice());
}

//Computer Random Choice
function compChoice()
{
    computerChoice=Math.floor( Math.random() * 3 );

    if(computerChoice===0)
    {
        bunnyCompChoice();
    }
    else if(computerChoice===1)
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

//finds who the winner is
function determineWinner(playerChoice,computerChoice)
{
    //document.getElementById("game");
    let winnerMessage=document.createElement("h2");
    winnerMessage.setAttribute("id","winner-message");
    
    if(playerChoice===computerChoice)
    {
        winnerMessage.textContent = "TIE";
    }
    else if(playerChoice===0&&computerChoice===1)
    {
        winnerMessage.textContent = "Bunny eats Carrot: YOU WON!";
    }
    else if(playerChoice===1&&computerChoice===2)
    {
        winnerMessage.textContent= "Carrot plugs Gun: YOU WON!";
    }
    else if(playerChoice===2&&computerChoice===0)
    {
        winnerMessage.textContent="Gun shoots Bunny: YOU WON!";
    }
    else if(playerChoice===0&&computerChoice===2)
    {
        winnerMessage.textContent="Bunny gets shot by Gun: YOU LOST:(";
    }
    else if(playerChoice===1&&computerChoice===0)
    {
        winnerMessage.textContent="Carrot gets eaten by Bunny: YOU LOST:(";
    }
    else if(playerChoice===2&&computerChoice===1)
    {
        winnerMessage.textContent="Gun gets plugged by Carrot: YOU LOST:(";
    }
    
    console.log(winnerMessage);
    winnerMessage.append();
}

document.getElementById("bunny-choice").addEventListener("click", bunnyChoice);
document.getElementById("carrot-choice").addEventListener("click", carrotChoice);
document.getElementById("gun-choice").addEventListener("click", gunChoice);