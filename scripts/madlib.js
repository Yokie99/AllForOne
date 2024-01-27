let Superhero= document.getElementById("Superhero");
let city= document.getElementById("city");
let animal = document.getElementById("animal");
let scaryThing = document.getElementById("scaryThing");
let favDessert = document.getElementById("favDessert");
let TvShow = document.getElementById("TvShow");
let madlibOutput = document.getElementById("madlibOutput");
let hideMe = document.getElementById("hideMe");

let madlibBtn = document.getElementById("madlibBtn");


const getdata = async (superheroName, city, animal, dessert, anime) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Five/MadLib/${superheroName}/${city}/${animal}/${scaryThing}/${dessert}/${anime}`);
    const data = await promise.text();
    
    return data;
}

madlibBtn.addEventListener('click', async () =>{
        let data = await getdata(Superhero.value, city.value, animal.value, dessert.value, TvShow.value);
        madlibOutput.textContent = data;

        hideMe.classList.add("hidden");
        console.log("hi")
    
})