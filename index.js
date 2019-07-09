
window.addEventListener('load',function(){

  function calculateMonthlyPayment(){
  const principal = document.getElementById('principal').value;
       if (isNaN(principal) || principal <= 0) {
           alert("Please enter a valid amount.");
         return;
       };
   const annualRate = document.getElementById('rate').value;
       if (isNaN(annualRate) || annualRate <= 0) {
           alert("Please enter a Rate!.");
         return;
       };

   const numberOfYears = document.getElementById('number-of-years').value;
     if(isNaN(numberOfYears)){
       alert("Please select a Term!");
       return;

     };

    const monthlyRate = annualRate / 12 / 100;
    const numberOfPayments = numberOfYears * 12;
    const numerator = monthlyRate * (1 + monthlyRate) ** numberOfPayments;
    const denominator = (1 + monthlyRate) ** numberOfPayments - 1;
    const monthlyPayment = principal * (numerator / denominator);
    const dollar = monthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});


    document.getElementById('payment').innerHTML = dollar;
    document.getElementById('monthlyPay').style = 'display: inline';

  };

  // let dollar= monthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  // alert(dollar);


  let submitButton = document.querySelector('#calculate-button');
  // // console.log(submitButton);
  submitButton.onclick = function() { calculateMonthlyPayment(); };


});




//
//
// window.addEventListener('load', function(){
//   // console.log('Hello World!');
//
//
// function calculateTip(){
//   let totalBill = document.getElementById('total-bill').value;
//   let tipOption = document.getElementById('tip-option').value;
//   let numberOfPeople = Number(document.getElementById('number-of-people').value);
//
//
//   // validation
//     if (isNaN(totalBill) || totalBill <= 0) {
//        alert("Please enter a valid amount.");
//      return;
//     }
//
//     //Calculate tip
//     let tipPercentage;
//     if (tipOption === 'excellent-20%'){
//       tipPercentage = 20;
//     }else if(tipOption ==='good-15%'){
//       tipPercentage = 15;
//     }else if(tipOption === 'poor-10%'){
//       tipPercentage = 10;
//     }else{
//       alert('Please select an option.');
//       return;
//     }
//
//     if (isNaN(numberOfPeople)) {
//       alert("Please enter a valid number of persons.");
//     return;
//     }
//
//     if (Number.isInteger(numberOfPeople) && numberOfPeople > 0){
//       let totalTip = ((totalBill * tipPercentage) / 100);
//       let tipPerPerson = (totalTip / numberOfPeople);
//
//       let dollar = tipPerPerson.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
//       document.getElementById('tip').innerHTML = dollar;
//       document.getElementById('totalTip').style = 'display: inline';
//       // alert(`The total tip is: $${dollar}`);
//
//     } else {
//       alert("Please enter a valid number of persons.");
//     }
//
//
// }
//
//
//
// let submitButton = document.querySelector('#calculate-button');
// // console.log(submitButton);
// submitButton.onclick = function() { calculateTip(); };
//
//
// });
