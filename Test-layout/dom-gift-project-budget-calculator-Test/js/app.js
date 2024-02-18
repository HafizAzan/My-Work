const Budgetform = document.querySelector(".budget-form");
const BudgetInput = document.querySelector("#budget-input")
const BudgetValue = document.querySelector("#budget-amount");
const BalanceValue = document.querySelector("#balance-amount")
console.log({Budgetform,BudgetInput,BudgetValue,BalanceValue});

Budgetform.addEventListener("submit",function(event){
  event.preventDefault();
  if(!BudgetInput.value){
    alert("plz fil this budget input.")
    return;
  }
  BudgetValue.innerHTML =  +BudgetInput.value;
  BalanceValue.innerHTML = +BudgetInput.value;
  BudgetInput.value = "";

})

const ExpenceForm = document.querySelector(".expense-form");
const ExpenceInput = document.querySelector("#expense-input")
const ExpenceAmountEnter = document.querySelector("#amount-input");
const ExpenceValue = document.querySelector("#expense-amount")
console.log({ExpenceForm,ExpenceInput,ExpenceAmountEnter,ExpenceValue})

ExpenceForm.addEventListener("submit",function(event){
  event.preventDefault();
  const ExpenceTitle = document.querySelector("#expense-input") 
const ExpenceAmountWrite= document.querySelector("#amount-input"); 
const List = document.querySelector('#expense-list');
console.log(List)
const DivCreate = document.createElement('div');
DivCreate.className = "expense"
DivCreate.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 class="expense-title mb-0 text-uppercase list-item">${ExpenceTitle.value}</h6>
         <h5 class="expense-amount mb-0 list-item">- ${ExpenceAmountWrite.value}</h5>
         <div class="expense-icons list-item">
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>
       </div> `

       List.append(DivCreate);
  if(!ExpenceInput.value && !ExpenceAmountEnter.value){
    alert("plz fil this expence portion.")
    return;
  }
  let NewBlance = BalanceValue.innerHTML - ExpenceAmountEnter.value;  
  BalanceValue.innerHTML = + NewBlance;
  ExpenceValue.innerHTML = (parseInt(ExpenceValue.innerHTML) - parseInt(ExpenceAmountEnter.value))
  ExpenceInput.value = ""
  ExpenceAmountEnter.value = ""

});

const expenseList = document.getElementById('expense-list');
expenseList.addEventListener('click',function(event){
  event.preventDefault();
  if(event.target.className =="fas fa-trash" ){
    console.warn("btn working")
  }if(confirm("serious")){
    event.target.parentElement.parentElement.parentElement.remove();
  }

});

// Function to delete an expense item
function deleteExpenseItem(expenseId) {
  // Get the expense item element by its ID
  const expenseItem = document.getElementById(expenseId);
  // Get the expense amount from the expense item
  const expenseAmount = parseInt(expenseItem.querySelector('.expense-amount').textContent);
  // Update the expense value
  const expenseValue = parseInt(document.querySelector('#expense-amount').textContent);
  document.querySelector('#expense-amount').textContent = expenseValue - expenseAmount;
  // Update the balance value
  const balanceValue = parseInt(document.querySelector('#balance-amount').textContent);
  document.querySelector('#balance-amount').textContent = balanceValue + expenseAmount;
  // Remove the expense item from the list
  expenseItem.remove();
}
