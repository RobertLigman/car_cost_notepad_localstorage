const expensesForm = document.querySelector("#expenses-form");
const deleteAll = document.querySelector('[data-label="delete-all"]');

const output = document.querySelector('[data-label="output"]');
deleteAll.addEventListener("click", () => {
  if (output.innerHTML !== "") {
    output.innerHTML = "";
  }
});
expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  expensesForm.reset();
  console.log(e);
  console.log(e.target);
  //   console.log( "działa");
});
