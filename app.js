function updateProductNumber(product, isIncreasing, price) {
  const caseInput = document.getElementById(product + "-number");
  let productNumber = caseInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  caseInput.value = productNumber;

  // update productTotal

  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;

  const subTotal = calculateTotal();
  console.log(subTotal);
}

function getInput(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  console.log(productNumber);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInput("phone") * 1235;
  const caseTotal = getInput("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("total-price").innerText = totalPrice;
}
//  phone case  increase
document.getElementById("plus").addEventListener("click", function () {
  updateProductNumber("case", true, 59);
});
// phone case decrease
document.getElementById("minus").addEventListener("click", function () {
  updateProductNumber("case", false, 59);
});
// phone Number increase
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", true, 1235);
});
// phone number decrease
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", false, 1235);
});
