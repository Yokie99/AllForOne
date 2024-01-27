let num1= document.getElementById("num1");
let num2= document.getElementById("num2");
let lessthanOutput = document.getElementById("lessthanOutput");
let lessThanBtn = document.getElementById("lessThanBtn");

const addem = async (num1, num2) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/GreaterOrLessThan/${num1}/${num2}`);
    const data = await promise.text();
    
    return data;
}

lessthanBtn.addEventListener('click', async () =>{
        let data = await addem(num1.value, num2.value);
        lessthanOutput.textContent = data;
        console.log("hi")
    
})