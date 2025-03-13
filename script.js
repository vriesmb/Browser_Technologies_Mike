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
let bedrijfsVragen = document.querySelectorAll(".bedrijfsVragen");

bedrijfJa.addEventListener("click", (event) => {
    bedrijfsVragen.forEach(element => {
        element.hidden = false;
        console.log('hide false1')
    });
})

inputNee.addEventListener("click", (event) => {
    bedrijfsVragen.forEach(element => {
        element.hidden = true;
        console.log('hide false2')
    });
})


function hideOnLoad() {
    bedrijfsVragen.forEach(element => {
        element.hidden = true;
        console.log('hide true')
    });
}

hideOnLoad();







const inputFields = document.querySelectorAll("input");

inputFields.forEach((inputField) => {
    if (localStorage.getItem(inputField.id)) {
        inputField.value = localStorage.getItem(inputField.id);
    }
    inputField.addEventListener("input", () => {
        localStorage.setItem(inputField.id, inputField.value);
    });
});






// let bedrijfJa = document.querySelector("#bedrijfJa");
// let inputNee = document.querySelector('#bedrijfNee');
// let bedrijfsVragen = document.querySelector("#bedrijfsVragen");

// bedrijfJa.addEventListener("click", (event) => {
//     bedrijfsVragen.hidden = false;
// })

// inputNee.addEventListener("click", (event) => {
//     bedrijfsVragen.hidden = true;
// })