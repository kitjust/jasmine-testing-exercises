window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs 
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.getElementById("loan-amount").value = 9999
  let years = document.getElementById("loan-years").value = 9
  let rate = document.getElementById("loan-rate").value = 0.12
  calculateMonthlyPayment({
    amount,
    years,
    rate
  });
  return {
    amount,
    years,
    rate
  }
}

// Get the current values from the UI
// Update the monthly payment
function update_test() {
  updateMonthly(calculateMonthlyPayment(setupIntialValues()))


}// Get the current values from the UI
// Update the monthly payment
function update() {
  let amount = parseFloat(document.getElementById("loan-amount").value)
  let years = parseFloat(document.getElementById("loan-years").value)
  let rate = parseFloat(document.getElementById("loan-rate").value)
  updateMonthly(calculateMonthlyPayment({
    amount,
    years,
    rate
  }))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values.amount // amount of principle
  let i = values.rate / 100 / 12 // periodic interest rate
  let n = values.years * 12 // number of payments
  let monthlyPayment = P * i / ( 1 - (1 + i)** -n )
  return monthlyPayment.toFixed(2) // converts to string that always has 2 decimals
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly)
  document.getElementById('monthly-payment').innerHTML = monthly
}
