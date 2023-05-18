const btn = document.querySelector("button")
const input = document.querySelector("input")
const root = document.querySelector("#root")
const url = 'https://restcountries.com/v3.1'

const endpoints = {
    name:"/name/"
}
function render(note='kyrgyzstan') {
    fetch(url+endpoints.name+note)
    .then(wer=>wer.json())
    .then(data=>{
        console.log(data);
        show(data)
    })
}


function show(dead) {
    for (const item of dead) {
        root.innerHTML=`
    <p>${item.name.common}</p>
    <img src=${item.flags.png}  />
    <p>${item.capital}</p>
    `
    }
    
}

input.onchange=()=>{
    render(input.value)
}