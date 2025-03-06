// let overigSelected = document.querySelector('.overigInput')
// let inputsSelected = document.querySelector('.inputsSelected')
// let inputFieldOverig = document.querySelector('.overigTextArea')

// overigSelected.addEventListener('click', (event) => {
//     inputFieldOverig.hidden = false;
//     // inputFieldOverig.classList.add('fieldAnimation')
// })


// inputsSelected.addEventListener('click', (event) => {
//     inputFieldOverig.toggleAttribute = hidden;
//     // inputFieldOverig.classList.add('fieldAnimation')
// })


let bedrijfJa = document.querySelector("#bedrijfJa");
let inputNee = document.querySelector('#bedrijfNee');
let bedrijfsVragen = document.querySelector("#bedrijfsVragen");

bedrijfJa.addEventListener("click", (event) => {
    bedrijfsVragen.hidden = false;
})

inputNee.addEventListener("click", (event) => {
    bedrijfsVragen.hidden = true;
})