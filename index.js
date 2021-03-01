const expensesForm = document.querySelector("#expenses-form");
const deleteAll = document.querySelector('[data-label="delete-all"]');

const output = document.querySelector('[data-label="output"]');
const costHeader = document.createElement("h1");
output.appendChild(costHeader);
deleteAll.addEventListener("click", () => {
  if (output.innerHTML !== "") {
    output.innerHTML = "";
  }
});
let overAllCost = 0;
expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.childNodes);
  console.log(e.target);
  // const lastValue = +[...e.target].find(
  //   (item) => item.nodeName === "INPUT" && item.id === "value"
  // ).value;
  // overAllCost += lastValue;

  //   console.log( "działa");
  const div = document.createElement("div");
  div.classList.add("cell");
  // console.log([...e.target.childNodes].filter((item) => item));
  // console.log([...e.target.childNodes].filter((item) => item == "input"));
  [...e.target].forEach((Element) => {
    if (Element.nodeName === "INPUT".toUpperCase()) {
      // console.log(Element.nodeName, true);
      const item = document.createElement("p");
      item.innerHTML = Element.value;
      if (Element.id === "value") {
        item.classList.add("value");
      }

      // console.log(item, Element.value);
      div.appendChild(item);
    }
    // console.log(Element);
  });

  output.append(div);
  expensesForm.reset();

  overAllCost = [...document.querySelectorAll("p.value")]
    .map((item) => {
      return +item.textContent;
    })
    .reduce((acc, currentValue) => {
      return (acc += currentValue);
    });
  costHeader.textContent = "Suma Wydatków: " + overAllCost;
});
