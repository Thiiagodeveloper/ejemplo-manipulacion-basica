const h1 = document.querySelector('h1');
const form= document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
// const btn = document.querySelector('#btncalcular');
const btn = document.querySelector('button')
const pResult = document.querySelector('#result')
1
// form.addEventListener('submit',sumarInputValues);

// function sumarInputValues(event){
//     console.log(event)
//     event.preventDefault();
//     const sumaInputs = parseInt(input1.value ) + parseInt(input2.value);
//     pResult.innerHTML = "Resultado: " + sumaInputs;
// }

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("onclick", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})}`;
    document.body.style.background = rndCol;
});