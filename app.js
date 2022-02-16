function updateProductNumber(product, isIncreasing, price) {
  const caseInput = document.getElementById(product + "-number");
  let caseNumber = caseInput.value;
  if (isIncreasing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;

  // update caseTotal

  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = caseNumber * price;
}
//  phone case  increase
document.getElementById("plus").addEventListener("click", function () {
  updateProductNumber("case", true, 59);
});
// phone case decrease
document.getElementById("minus").addEventListener("click", function () {
  updateProductNumber("case", false, 59);
});

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", true, 1235);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", false, 1235);
});
