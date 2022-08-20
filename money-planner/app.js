function getInputFieldValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

function setElementValue(elementId, totalAmount) {
    const Element = document.getElementById(elementId);
    Element.innerText = totalAmount;
}

document.getElementById('btn-calculator').addEventListener('click', function() {

    // get income
    const incomeValue = getInputFieldValue('income-field');

    // get expenses
    const foodValue = getInputFieldValue('food-field');
    const rentValue = getInputFieldValue('rent-field');
    const clothValue = getInputFieldValue('cloth-field');

    if (incomeValue < foodValue || incomeValue < rentValue || incomeValue < clothValue) {
        alert('income number should be bigger than expenses ');
        return;
    }

    if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)) {
        alert('Please input all the field with a valid number');
        return;
    }

    // calculate total expenses
    const totalExpenses = foodValue + rentValue + clothValue;

    // get the remaining balance from income
    const remaingBalance = incomeValue - totalExpenses;

    if (remaingBalance < 0) {
        alert('Income must be bigger than expenses')
        return;
    }

    // set total expenses
    setElementValue('total-expenses', totalExpenses)

    // set remaining balance
    setElementValue('balance', remaingBalance)
})

document.getElementById('btn-save').addEventListener('click', function() {
    // get income
    const incomeValue = getInputFieldValue('income-field');

    // get expenses
    const foodValue = getInputFieldValue('food-field');
    const rentValue = getInputFieldValue('rent-field');
    const clothValue = getInputFieldValue('cloth-field');

    // get saving 
    const saveValue = getInputFieldValue('save-field');


    if (isNaN(saveValue) || isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue)) {
        alert('Please input all the field with a valid number');
        return;
    }
    const savingPersent = parseFloat(saveValue / 100);
    const saving = incomeValue * savingPersent;

    // calculate total expenses and saving
    const totalExpenses = foodValue + rentValue + clothValue + saving;
    const remaingBalance = incomeValue - totalExpenses;

    if (totalExpenses > incomeValue) {
        alert('Save amount must be less than income and adjustable with expenses');
        return;
    }

    // set saving 
    setElementValue("saving-amount", saving);

    // set saving 
    setElementValue("remaining-balance-amount", remaingBalance);


})