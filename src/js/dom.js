// DOM Elements
export const addTransactionBtn = document.querySelector("#addTransaction");
export const balanceDisplay = document.querySelector("#balance");
export const message = document.querySelector("#message");

// Account Elements
export const accInput = document.querySelector("#accountinput");
export const addAcc = document.querySelector("#addAcct");
export const accountList = document.querySelector("#accountList");
export const transectionAccount = document.querySelector("#transectionAccount");

// Category Elements
export const categoryInput = document.querySelector("#cateInput");
export const addCategory = document.querySelector("#addmore");
export const incomeCategoryList = document.querySelector("#incomeCategoryList");
export const expenseCategoryList = document.querySelector("#expenseCategoryList");
export const transectionCategory = document.querySelector("#transectionCategory");

// Transaction Inputs
export const amountInput = document.querySelector("#amountInput");
export const descInput = document.querySelector("#descInput");

// Income - Expense Buttons
export let transactionType = "income";
export const incomeBtn = document.querySelector("#incomeBtn");
export const expenseBtn = document.querySelector("#expenseBtn");
export const cateop = document.querySelector("#cateop")  // start from here

// Form data
export const selected = document.querySelector('input[name="category"]:checked');

// Data Stores
export let balance = 0;
export let acclist = ["Cash", "Bank", "Savings Account", "GPay", "Crypto Wall"];
export const incomeCategory = ["Cash Received", "Salary", "Side Income"];
export const expenseCategory = ["Rent", "Fast Food", "Phone Recharge", "Transportation", "Groceries", "Education"];

//Over view

export const totalIncome = document.querySelector('#totalIn')
export const totalExpense = document.querySelector('#totalExp')
export const incoverviewUL = document.querySelector('#incoverview')
export const expoverviewUL = document.querySelector('#expoverview')
