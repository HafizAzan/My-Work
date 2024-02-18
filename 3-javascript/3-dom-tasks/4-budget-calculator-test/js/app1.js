const FormSelect = document.querySelector("#budget-form");
const SelectInput = document.querySelector('#budget-input');
const BugetAmount = document.querySelector("#budget-amount");
const BalanceAmount = document.querySelector('#balance-amount')
const expenseList = document.querySelector('#expense-list');
const expense = document.querySelector('.expense')
const ExpenseSelectForm = document.querySelector('#expense-form');
const ExpenseTitle = document.querySelector('#expense-input');
const ExpenseWritePrice= document.querySelector('#amount-input');
const ExpenseSee = document.querySelector('#expense-amount');

FormSelect.addEventListener('submit',function(azan){
    azan.preventDefault();
    let ValueTarget = SelectInput?.value;
    console.log(ValueTarget)
    BugetAmount.innerHTML = BalanceAmount.innerHTML =+ ValueTarget;
    if(SelectInput.value == "" || SelectInput.value == 0 ){
        BugetAmount.innerHTML = BalanceAmount.innerHTML = "00"
        alert("plzz Fill Budget Form!")
        return;
    }
    SelectInput.value ="" 
});

ExpenseSelectForm.addEventListener('submit',function(khan){
    khan.preventDefault();
    let ExpenseKiValue = ExpenseWritePrice.value;
    console.log(ExpenseKiValue)
    ExpenseSee.innerHTML =+ ExpenseKiValue; 
    BalanceAmount.innerHTML -= ExpenseSee.innerHTML; 
    if(ExpenseWritePrice.value == "" || ExpenseTitle.value == "" ){
        alert("phelay isay pura fill kren okay!")
        return;
    }

    const DivCreate = document.createElement("div");
    DivCreate.className = "expense";
    DivCreate.innerHTML = `
    <div class="expense-item d-flex justify-content-between align-items-baseline">
    <h6 class="expense-title mb-0 text-uppercase list-item">${ExpenseTitle.value}</h6>
    <h5 class="expense-amount mb-0 list-item">-${ExpenseWritePrice.value}</h5>
    <div class="expense-icons list-item">
     <a href="#" class="delete-icon" data-id="${expense.id}">
      <i class="fas fa-trash"></i>
     </a>
    </div>
   </div>`

    expenseList.append(DivCreate)
    ExpenseWritePrice.value = ""
    ExpenseTitle.value= ""
});

expenseList.addEventListener('click',function(event){
    event.preventDefault();
    let currentElement = event.target;
    if(currentElement.className =="fas fa-trash" && confirm("seriously?") ){
      console.error("btn working")
    currentElement.parentElement.parentElement.parentElement.remove();
    }
  });