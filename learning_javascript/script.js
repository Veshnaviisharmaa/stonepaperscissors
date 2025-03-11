// let divs=document.querySelector("div");
// console.dir(divs[0])
// console.log(divs[0])
// divs[0].innerText="hello div1"
// divs[1].innerText="hello div2"
// divs[2].innerText="hello div3"
// for(let i=0;i<divs.length;i++)
// {
//     divs[i].innerText=`new div value ${i}`;
// }
// console.log(divs)
// console.log(divs.getAttribute("class"))
// let ele=document.createElement("button");
// ele.innerText="this is a button";
// let div=document.querySelector("div");
// div.before(ele);
// let newbtn=document.createElement("button");
// newbtn.innerText="Click me";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// let body=document.querySelector("body");
// body.prepend(newbtn)
// let p=document.querySelector("p");
// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("button click in the js file")
// }
// let content=document.querySelector(".content");
// content.onmouseover=()=>{
//     console.log("you are viewing a div")
// }
// let btn1=document.querySelector("#btn1");
// // btn1.onclick=(e)=>{
// //     console.log(e)
// //     // let div=document.querySelector(".content");
// //     // div.innerHTML="<ihello>hello world</i>"


// // }
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked-1");
// })
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked-2");
// })
// const handler3=()=>{
//     console.log("button 1 was clicked-3");
// }
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked-4");
// })
// btn1.removeEventListener("click",handler3);
// let btn=document.querySelector("#mode");
// let currentmode="light"
// btn.addEventListener("click",()=>{
//     if(currentmode==="light")
//      {   currentmode="dark";
//         document.querySelector("body").classList.add("dark");
//         document.querySelector("body").classList.remove("light");
//      }
//     else{
//         currentmode="light";
//         document.querySelector("body").classList.add("light");
//         document.querySelector("body").classList.remove("dark");
//     }
//     console.log("you are trying to switch mode")
//     console.log(currentmode)
// })
let userscore=0;
    let computerscore=0;
let message=document.querySelector("#message");
const choices=document.querySelectorAll(".choice");
let user_scorepara=document.querySelector("#user-score");
let computer_scorepara=document.querySelector("#computer-score");



const comp_choice=()=>{
    const options=["rock","scissors","paper"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}

const draw=()=>{
    console.log("Game was a draw")
    message.innerText="Game was a draw"
    message.style.backgroundColor="yellow";
}
//Function to show the winner of the game
const showWinner=(userwin,userchoice,computer_choice)=>{
    if(userwin===true)
       {     userscore++;
        user_scorepara.innerText=userscore;
        console.log("user won");
        message.innerText=`User won, ${userchoice} defeated ${computer_choice}`
        message.style.backgroundColor="green";
     

       }
    else
    {computerscore++;
        computer_scorepara.innerText=computerscore;
        console.log("computer won")
        message.innerText=`Computer won, ${computer_choice} defeated ${userchoice}`
        message.style.backgroundColor="red";
        
    }
}


const playgame=(userchoice)=>{
console.log("user choice is =",userchoice);//received users choice
//generate computer choice
const computer_choice=comp_choice();
console.log("computer choice is =",computer_choice);
// let the battle begin
if(computer_choice===userchoice)
{
    //draw situation
    draw();
}
else {
    let userwin=true;
    if(userchoice==="scissors")
    {// computer choice can be paper or rock
        userwin=(computer_choice==="rock")?false:true;
    }
    else if(userchoice==="paper")
    {
        //computer choice can be rock or scissors
        userwin=(computer_choice==="scissors")?false:true;
    }
   else
    {
        userwin=(computer_choice==="paper")?false:true;
    }
    showWinner(userwin,userchoice,computer_choice);

}
}
    
 
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userchoice=choice.getAttribute("id")
            playgame(userchoice)
        });
    });