//Reverse123
let ballQuestion = document.getElementById("ballQuestion");
let ballOutput = document.getElementById("ballOutput");
let ballBtn = document.getElementById("ballBtn");

const balling = async () => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/EightBall/AskTheBall`);
    const data = await promise.text();
    
    return data;
}

ballBtn.addEventListener('click', async () =>{
        let data = await balling(ballQuestion.value);
        ballOutput.textContent = data;
        console.log("hi")
    
})