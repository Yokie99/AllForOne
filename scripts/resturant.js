let restaurantChoice= document.getElementById("restaurantChoice");
let restaurantOutput = document.getElementById("restaurantOutput");
let restaurantBtn = document.getElementById("restaurantBtn");

const addem = async (input) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Resturant/Hunger/${input}`);
    const data = await promise.text();
    
    return data;
}

restaurantBtn.addEventListener('click', async () =>{
        let data = await addem(restaurantChoice.value);
        restaurantOutput.textContent = data;
        console.log("hi")
    
})