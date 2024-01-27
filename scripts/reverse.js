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