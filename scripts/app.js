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




