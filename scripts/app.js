//sayHello

let sayHelloName = document.getElementById("sayHelloName");
let sayHelloOutput = document.getElementById("sayHelloOutput");
let sayHelloBtn = document.getElementById("sayHelloBtn");

const sayHello = async (Name) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/SayHello/SayHello/${Name}`);
    const data = await promise.text();
    
    return data;
}

sayHelloBtn.addEventListener('click', async () =>{
        let data = await sayHello(sayHelloName.value);
        sayHelloOutput.textContent = data;
        console.log("hi")
    
})



//Reverse
let reverseString = document.getElementById("reverseString");
let reverseOutput = document.getElementById("reverseOutput");
let reverseBtn = document.getElementById("reverseBtn");

const reverse = async (Name) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Seven/Reversed/${Name}`);
    const data = await promise.text();
    
    return data;
}

reverseBtn.addEventListener('click', async () =>{
        let data = await reverse(reverseString.value);
        reverseOutput.textContent = data;
        console.log("hi")
    
})
