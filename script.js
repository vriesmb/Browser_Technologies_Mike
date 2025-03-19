const balanceInheritanceFields = document.querySelectorAll(
    ".balance-inheritance input"
);
const totalValues = document.querySelectorAll(".balance-inheritance p");

// Balance Inheritance Input Fields

// VALUE input fields
const generalInboedelField = document.querySelector("input[name='g-inboedel']");
const privateInboedelField = document.querySelector("input[name='p-inboedel']");
const generalVervoersmiddelField = document.querySelector(
    "input[name='g-vervoersmiddel']"
);
const privateVervoersmiddelField = document.querySelector(
    "input[name='p-vervoersmiddel']"
);

const generalKunstField = document.querySelector("input[name='g-kunst']");
const privateKunstField = document.querySelector("input[name='p-kunst']");
const generalOverigField = document.querySelector("input[name='g-overig']");
const privateOverigField = document.querySelector("input[name='p-overig']");

// DEBT Input Fields

const generalMortgageField = document.querySelector("input[name='g-mortgage']");
const privateMortgageField = document.querySelector("input[name='p-mortgage']");
const generalGiftField = document.querySelector("input[name='g-gift']");
const privateGiftField = document.querySelector("input[name='p-gift']");

// FUNEREAL EXPENSES Input Fields

const ceremonyField = document.querySelector("input[name='ceremony']");
const cateringField = document.querySelector("input[name='catering']");

// AUTHORIZED PERSONS Input Fields

const authorizedPersonsField = document.querySelector(
    "input[name='authorized-persons']"
);

// TOTAL VALUES

const totalBalanceInheritance = document.querySelector(
    "p[data-total-balance-inheritance]"
);
const totalPersonalBalanceInheritance = document.querySelector(
    "p[data-total-personal-balance-inheritance]"
);






totalValues.forEach((value) => {
    value.removeAttribute("hidden");
});






// Balance Inheritance Calculation

// FUNCTIES OM TUSSENTOTALEN TE BEREKENEN

function totalValueCalculation() {
    const value =
        (Number(generalInboedelField.value) +
            Number(generalVervoersmiddelField.value) +
            Number(generalKunstField.value) +
            Number(generalOverigField.value)) /
        4 +
        Number(privateInboedelField.value) +
        Number(privateVervoersmiddelField.value) +
        Number(privateKunstField.value) +
        Number(privateOverigField.value);

    return value;
}

function totalDebtCalculation() {
    const debt =
        (Number(generalMortgageField.value) + Number(generalGiftField.value)) / 2 +
        Number(privateMortgageField.value) +
        Number(privateGiftField.value);

    return debt;
}

function totalFuneralExpensesCalculation() {
    const funeralExpenses =
        Number(ceremonyField.value) + Number(cateringField.value);

    return funeralExpenses;
}

function totalBalanceInheritanceCalculation() {
    const balanceInheritance =
        totalValueCalculation() -
        totalDebtCalculation() -
        totalFuneralExpensesCalculation();

    return balanceInheritance;
}

function totalPersonalBalanceInheritanceCalculation() {
    let authorized = 1; // Variable voor default state
    if (authorizedPersonsField.value > 1) {
        // Als de waarde van authorized groter is dan 1 dan wordt de waarde van authorized gelijk aan de waarde van de inputfield
        authorized = authorizedPersonsField.value;
    }

    const total = totalBalanceInheritanceCalculation() / authorized;
    // hier pak je het totaal van de berekening en deel je door aantal rechthebbende personen
    // Dit allemaal doe je zodat er geen -infinity komt te staan als er geen waarde is ingevuld

    // uitkomst vd variable pakken door return te doen, want je wilt niet de som/formule/functie pakken maar de uitkomst
    return total;
}

// TOTALE BEREKENING

function calculateTotal() {

    totalBalanceInheritance.textContent = `Totaal: €${totalBalanceInheritanceCalculation().toFixed(2)}`;

    totalPersonalBalanceInheritance.textContent = `Per persoon: €${totalPersonalBalanceInheritanceCalculation().toFixed(2)}`;

    // afronding gedeelte met toFixed(2) zorgt ervoor dat er 2 decimalen achter de komma komen te staan
}



balanceInheritanceFields.forEach((field) => {
    document.addEventListener("DOMContentLoaded", () => {
        calculateTotal();
    });

    field.addEventListener("input", () => {
        calculateTotal();
    });
});









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


// LOCAL STORAGE

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









