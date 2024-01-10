function updatePhoneNumber(isIncraese) {
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;

    if (isIncraese) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}


function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 120000;
    const phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = phoneTotalPrice;
}




document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const newphoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newphoneNumber);
    calculatSubTotal(); 
   
});

document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const NewPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(NewPhoneNumber);
    calculatSubTotal();
});
