/*
1. add event listener to plus button
2.get the value inside the case number field (input field)
3. convert the number to an integer
4. celculate the new case number
5. set the value to the case number field
*/ 
 
 document.getElementById("btn-case-plus").addEventListener("click", function(){
    const caseNumberField = document.getElementById("case-number-field");
    const  caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
 });

 