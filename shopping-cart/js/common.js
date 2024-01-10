function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const CurrentPhoneTotalString = phoneTotalElement.innerText;
    const CurrentPhoneTotal = parseInt(CurrentPhoneTotalString);
    return CurrentPhoneTotal;
}

function calculatSubTotal(){
    // calculate total price
    const CurrentPhoneTotal = getTextElementValueById('phone-total');
    const CurrentCaseTotal = getTextElementValueById('case-totla');

    const CurrentSubTotal = CurrentPhoneTotal + CurrentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = CurrentSubTotal;
}