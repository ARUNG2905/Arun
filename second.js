let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score")
const compscorep = document.querySelector("#comp-score")


const gencompchoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
const randomIndex = Math.floor(Math.random() * 3);
return options[randomIndex];
};
const drawgame = () =>{
    // console.log("game was draw");
    msg.innerText ="it's draw play agin";
    msg.style.backgroundColor = "rgb(103, 41, 69)";
};
const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        // console.log("user won the game");
        userscore++;
        userscorep.innerText = userscore;
        msg.innerText =`user win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("comp won the game");
        // msg.innerText ="computer win";
        compscore++;
        compscorep.innerText = compscore;
        msg.innerText =`comp win! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playgame =(userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    // console.log("comp choice =", compchoice);

    if (userchoice === compchoice){ 
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "Rock"){
            userwin = compchoice === "Paper" ? false : true;
        } else if(userchoice === "Paper") { 
            userwin = compchoice === "Scissor" ? false : true;
        } else if(userchoice === "Scissor") {
            userwin = compchoice === "Rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
        }
    };

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id")
        //  console.log("choice was clicked", userchoice);
         playgame(userchoice);
    });
});
