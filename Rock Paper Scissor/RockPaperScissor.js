const computer = document.querySelector(".computer-img");
const player = document.querySelector(".player-img");
const computerPoints = document.getElementById("c");
const playerPoints = document.getElementById("p");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
    option.addEventListener("click", ()=>{
        
        computer.classList.add("shake-computer");
        player.classList.add("shake-player");

        setTimeout(()=>{
            computer.classList.remove("shake-computer");
            player.classList.remove("shake-player");
            let playerChoice = option.innerText;
            player.src = "images/"+playerChoice+"Player.png";

            const choices = ["stone", "paper", "scissors"];
            let ArrayNo = Math.floor(Math.random()*3)
            console.log(choices[ArrayNo]);
            let computerChoice = choices[ArrayNo];
            computer.src = "images/"+computerChoice+"Computer.png";

            
        },900)
    })
});