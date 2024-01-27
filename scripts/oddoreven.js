let oddorevenNumber = document.getElementById("oddorevenNumber");
let oddorevenOutput = document.getElementById("oddorevenOutput");
let oddorevenBtn = document.getElementById("oddorevenBtn");

const oddoreven = async (num) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Six/OddOrEven/${num}`);
    const data = await promise.text();
    
    return data;
}

oddorevenBtn.addEventListener('click', async () =>{
        let data = await oddoreven(oddorevenNumber.value);
        oddorevenOutput.textContent = data;
        console.log("hi")
    
})