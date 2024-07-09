let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
console.log(choices);
var msg=document.querySelector(".msg");

const atlastwin=(userwin)=>{
    if(userwin){
        console.log("you win");
        msg.innerText="You win";
        msg.style.backgroundColor="green";
        msg.style.color="white";
        
    }
    else if(userwin===false){
        console.log("computer win");
        msg.innerText="Computer win";
        msg.style.backgroundColor="yellow";
        msg.style.color="black";
        
    }
    
}
const cmpchoice=()=>{
    const options=["rock","paper","scisior"];
    const ompchoice=Math.floor(Math.random()*3);
    return options[ompchoice];
    
}
const gamedraw =()=>{
   
    msg.innerText="game draw";
}
const playgame=(userc)=>{
    console.log("user choice",userc);

    const computer=cmpchoice();
    console.log("computer choice",computer);
    var userwin=true;
    if(userc===computer){
        gamedraw();
    }
    else if(userc==="paper" ){
        userwin=computer==="scisior"? false:true;
        
    }
    else if(userc==="paper"){
        userwin=computer==="scisior"?false: true;
    }
    else if(userc==="scisior"){
        userc=computer==="paper"?true:false;
    }
    
atlastwin(userc);

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userc=choice.getAttribute("id");
        console.log("image was clicked");
      
        playgame(userc);
        

    })
})