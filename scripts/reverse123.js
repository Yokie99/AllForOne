//Reverse123
let reverseNumber = document.getElementById("reverseNumber");
let reverse123Output = document.getElementById("reverse123Output");
let reverse123Btn = document.getElementById("reverse123Btn");

const reverse = async (Name) => {
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Seven123/ReversedNum/${Name}`);
    const data = await promise.text();
    
    return data;
}

reverse123Btn.addEventListener('click', async () =>{
        let data = await reverse(reverseNumber.value);
        reverse123Output.textContent = data;
        console.log("hi")
    
})