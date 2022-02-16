function updateCaseNumber(isIncreasing) {
  const caseInput = document.getElementById("input-value");
  let caseNumber = caseInput.value;
  if (isIncreasing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;

  // update caseTotal

  const caseTotal = document.getElementById("case-total");
  caseTotal.innerText = caseNumber * 59;
}

document.getElementById("plus").addEventListener("click", function () {
  updateCaseNumber(true);
});

document.getElementById("minus").addEventListener("click", function () {
  updateCaseNumber(false);
});
