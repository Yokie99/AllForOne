let addEmOne = document.getElementById("addEmOne");
let addEmTwo = document.getElementById("addEmTwo");
let addEmOutput = document.getElementById("addEmOutput");
let addEmBtn = document.getElementById("addEmBtn");

const addem = async (num1, num2) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Sum/of/${num1}/${num2}`);
    const data = await promise.text();
    
    return data;
}

addEmBtn.addEventListener('click', async () =>{
        let data = await addem(addEmOne.value, addEmTwo.value);
        addEmOutput.textContent = data;
        console.log("hi")
    
})