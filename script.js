const budgetInput = document.querySelector("#budgetInput");
const expenseAmountInput = document.querySelector("#expenseAmountInput");
const btnCalculate = document.querySelector("#btnCalculate ");
const btnExpense = document.querySelector("#expenseBtn");

const budget = document.querySelector("#budget");
const expense = document.querySelector("#expense");
const balance = document.querySelector("#balance");

let sum = 0;
let bud = 0;


btnCalculate.addEventListener("click", () => {
  bud += +budgetInput.value;
  budget.innerHTML = bud;
  sum += +budgetInput.value;
});

btnExpense.addEventListener("click", () => {
  expense.innerHTML = expenseAmountInput.value;
  sum -= +expense.innerHTML;
  balance.innerHTML = sum;
});
