let wakeUpTime= document.getElementById("wakeUpTime");
let wakeUpName= document.getElementById("wakeUpName");
let restaurantOutput = document.getElementById("wakeUpOutput");
let wakeUpBtn = document.getElementById("wakeUpBtn");

const addem = async (name, time) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/WokeUp/${name}/${time}`);
    const data = await promise.text();
    
    return data;
}

wakeUpBtn.addEventListener('click', async () =>{
        let data = await addem(wakeUpName.value, wakeUpTime.value);
        wakeUpOutput.textContent = data;
        console.log("hi")
    
})