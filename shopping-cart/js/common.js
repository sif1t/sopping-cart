function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const CurrentPhoneTotalString = phoneTotalElement.innerText;
    const CurrentPhoneTotal = parseInt(CurrentPhoneTotalString);
    return CurrentPhoneTotal;
}

function setTextElementValueById ( elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

function calculatSubTotal(){
    // calculate total price
    const CurrentPhoneTotal = getTextElementValueById('phone-total');
    const CurrentCaseTotal = getTextElementValueById('case-totla');

    const CurrentSubTotal = CurrentPhoneTotal + CurrentCaseTotal;
    setTextElementValueById('sub-total', CurrentSubTotal);
    

    // calculate tax
    const taxAmountString = (CurrentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString)
    setTextElementValueById('tax-amount', taxAmount);

    // calculate total price
    const finalAmount = CurrentSubTotal + taxAmount;
    setTextElementValueById('fianl-total', finalAmount);
    
}