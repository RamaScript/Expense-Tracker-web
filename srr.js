//Import Data
import { transactions } from './src/js/data.js';

// Dom Variables
import {
    addTransactionBtn,
    message,
    accInput,
    addAcc,
    accountList,
    transectionAccount,
    addCategory,
    expenseCategoryList,
    incomeCategoryList,
    transectionCategory,
    amountInput,
    descInput,
    incomeBtn,
    expenseBtn,
    acclist,
    totalExpense,
    totalIncome,
    incoverviewUL,
    expoverviewUL,
    accountbalance

} from '../src/js/dom.js';
import { clearMessageAfterDelay, createtran, overview, overviewExp, overviewIn } from '../src/js/function.js';

window.id = 1000;
window.balance = 0;
let transactionType = "income";

// Add Data in Local Storage
if (!localStorage.getItem("transaction_data")) {
    localStorage.setItem("transaction_data", JSON.stringify(transactions));
}
export let transactionJson = JSON.parse(localStorage.getItem("transaction_data"));

let transactionjson = transactionJson.transaction;

// Show Data Of Local Storage
for (let i in transactionjson) {
    const element = transactionjson[i];
    createtran(
        element.id,
        element.account,
        element.category,
        element.type,
        element.transaction,
        element.description
    );
}

let acclistj = transactionJson.accounts;
// Add Account List
acclistj.forEach(i => {
    let newli = document.createElement("li");
    newli.innerText = `${i.account} : ${i.balance}`;
    accountList.appendChild(newli);

    let option = document.createElement("option");
    option.value = i.account;
    option.textContent = i.account;
    transectionAccount.appendChild(option);
});

// Add Income Category
let incomeCategory = transactionJson.categories.income;
incomeCategory.forEach(i => {
    let newli = document.createElement("li");
    newli.innerText = i.categoryName;
    incomeCategoryList.appendChild(newli);
});

// Add Expence Category
let expenseCategory = transactionJson.categories.expense;
expenseCategory.forEach(i => {
    let newli = document.createElement("li");
    newli.innerText = i.categoryName;
    expenseCategoryList.appendChild(newli);
});

// Add Account
addAcc.addEventListener("click", () => {
    let newacc = accInput.value.trim();
    let bal = accountbalance.value;

    if (newacc && !acclist.includes(newacc)) {

        acclist.push(newacc);
        accInput.value = "";

        message.innerText = `Account '${newacc}' added.`;
        clearMessageAfterDelay();

        let newli = document.createElement("li");
        newli.innerText = newacc;
        accountList.appendChild(newli);

        let option = document.createElement("option");
        option.value = newacc;
        option.textContent = newacc;
        transectionAccount.appendChild(option);

        const newAccount = {
            id: Date.now(),
            account: newacc,
            balance: Number(bal)
        };
        console.log(newAccount.id, newAccount.account, newAccount.balance,);
        transactionJson.accounts.push(newAccount);
        localStorage.setItem("transaction_data", JSON.stringify(transactionJson));
    } 
    
    else {
        message.innerText = "Account already exists or invalid input.";
        clearMessageAfterDelay();
    }

});

// Add Category
addCategory.addEventListener("click", () => {
    let categorieform = document.createElement("div");
    categorieform.classList.add("categoryform");

    let heading = document.createElement("h1");
    heading.innerText = "Create Category";

    let closebtn = document.createElement("button");
    closebtn.classList.add("addbtn");
    closebtn.style.backgroundColor = "red";
    closebtn.innerText = "Close";
    closebtn.style.marginTop = "1rem";
    closebtn.style.marginLeft = "1rem";
    closebtn.style.width = "70px";

    let inputIncomeradio = document.createElement("input");
    inputIncomeradio.classList.add("rdobtn");
    inputIncomeradio.type = "radio";
    inputIncomeradio.name = "category";
    inputIncomeradio.value = "income";
    inputIncomeradio.id = "incomeRadio";
    inputIncomeradio.checked = true;

    let labelIncome = document.createElement("label");
    labelIncome.setAttribute("for", "incomeRadio");
    labelIncome.innerText = " Income";

    let inputExpradio = document.createElement("input");
    inputExpradio.classList.add("rdobtn");
    inputExpradio.type = "radio";
    inputExpradio.name = "category";
    inputExpradio.value = "expense";
    inputExpradio.id = "expenseRadio";

    let labelExpense = document.createElement("label");
    labelExpense.setAttribute("for", "expenseRadio");
    labelExpense.innerText = " Expense";

    let inputcat = document.createElement("input");
    inputcat.classList.add("inputcat");
    inputcat.placeholder = "Enter Your Category";
    inputcat.required = true;

    let NewFormBtn = document.createElement("button");
    NewFormBtn.innerText = "Add Category";
    NewFormBtn.style.width = "130px";
    NewFormBtn.classList.add("addbtn");
    NewFormBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedType = categorieform.querySelector('input[name="category"]:checked').value;
        const newCategory = inputcat.value.trim();

        if (!newCategory) return;

        if (selectedType === "income") {
            if (incomeCategory.includes(newCategory)) {
                message.innerText = "Category already exists."
                clearMessageAfterDelay();

            } else {
                let newli = document.createElement("li");
                newli.innerText = newCategory;
                incomeCategoryList.appendChild(newli);
                const newcate = {
                    id: Date.now(),
                    categoryName: newCategory,
                    total: 0
                }
                transactionJson.categories.income.push(newcate);
                localStorage.setItem("transaction_data", JSON.stringify(transactionJson));
            }
        } else {
            if (expenseCategory.includes(newCategory)) {
                message.innerText = "Category already exists."
                clearMessageAfterDelay();

            } else {
                let newli = document.createElement("li");
                newli.innerText = newCategory;
                expenseCategoryList.appendChild(newli);
                const newcate = {
                    id: Date.now(),
                    categoryName: newCategory,
                    total: 0
                }
                transactionJson.categories.expense.push(newcate);
                localStorage.setItem("transaction_data", JSON.stringify(transactionJson));
            }
        } categorieform.remove();
    });

    closebtn.addEventListener("click", () => {
        categorieform.remove();
    });

    categorieform.append(
        heading,
        inputIncomeradio, labelIncome,
        inputExpradio, labelExpense,
        inputcat,
        NewFormBtn,
        closebtn
    );

    document.body.appendChild(categorieform);
});

// Add Income Button
incomeBtn.addEventListener("click", () => {
    transactionType = "income";
    incomeBtn.classList.add("active");
    expenseBtn.classList.remove("active");
    transectionCategory.innerText = "";
    incomeCategory.forEach(i => {
        let option = document.createElement("option");
        option.value = i.categoryName;
        option.textContent = i.categoryName;
        transectionCategory.appendChild(option);
    });
    message.innerText = "Done."
    clearMessageAfterDelay();
});

// Add Expense Button
expenseBtn.addEventListener("click", () => {
    transactionType = "expense";
    expenseBtn.classList.add("active");
    incomeBtn.classList.remove("active");
    transectionCategory.innerText = "";
    expenseCategory.forEach(i => {
        let option = document.createElement("option");
        option.value = i.categoryName;
        option.textContent = i.categoryName;
        transectionCategory.appendChild(option);
    });
    message.innerText = "Done."
    clearMessageAfterDelay();
});

// Add Transaction
addTransactionBtn.addEventListener("click", () => {
    let id = getId() + 1
    let category = transactionType;
    let account = transectionAccount.value;
    let amount = parseFloat(amountInput.value);
    let description = descInput.value.trim() || "No description";
    let inputcat = transectionCategory.value;

    if (category == "income") {
        if (!inputcat || !incomeCategory.some(cat => cat.categoryName === inputcat)) {
            message.innerText = "Please select a valid category.";
            clearMessageAfterDelay();
            return;
        }
    }

    if (category == "expense") {
        if (!inputcat || !expenseCategory.some(cat => cat.categoryName === inputcat)) {
            message.innerText = "Please select a valid category.";
            clearMessageAfterDelay();
            return;
        }
    }

    if (!account || !acclistj.some(acc => acc.account === account)) {
        message.innerText = "Please select a valid account.";
        clearMessageAfterDelay();
        return;
    }

    if (isNaN(amount)) {
        message.innerText = "Invalid amount.";
        clearMessageAfterDelay();
        return;
    }

    createtran(id, account, category, inputcat, amount, description);
    transactionJson.transaction.push({
        id,
        account,
        category: transactionType,
        type: inputcat,
        transaction: amount,
        description
    });

    localStorage.setItem("transaction_data", JSON.stringify(transactionJson));
    location.reload();

});

function getId() {
    return (transactionjson[transactionjson.length - 1].id)
}



// Overview 
const a = overview()
let total = (a.totalexpense + a.totalincome);

totalIncome.innerText = `Total Income = ${a.totalincome} (${((a.totalincome / total) * 100).toFixed(2)})%`;
totalExpense.innerText = `Total Expense = ${a.totalexpense} (${((a.totalexpense / total) * 100).toFixed(2)})%`;

const expOVlist = overviewExp()
const incomeOVlist = overviewIn()

for (let i in incomeOVlist) {
    let li = document.createElement("li")
    li.style.margin = "1rem"
    li.innerText = `${i} = ${incomeOVlist[i]}`
    incoverviewUL.append(li);
}

for (let i in expOVlist) {
    let li = document.createElement("li")
    li.style.margin = "1rem"
    li.innerText = `${i} = ${expOVlist[i]}`
    expoverviewUL.append(li);
}

const ctx = document.getElementById('myChart');
const incomeKeys = Object.keys(incomeOVlist); 
const incomeValues = Object.values(incomeOVlist); 

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: incomeKeys,  
        datasets: [{
            data: incomeValues, 
            backgroundColor: [
                'rgba(219, 24, 24, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(248, 252, 9, 0.8)',
                'rgba(27, 198, 221, 0.8)',
                'rgba(89, 24, 221, 0.8)'
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: 'Income Overview'
            }
        }
    }
});

// Overview Income
const exp = document.getElementById('myChartExp');
const expenseKeys = Object.keys(expOVlist); 
const expenseValues = Object.values(expOVlist); 

new Chart(exp, {
    type: 'pie',
    data: {
        labels: expenseKeys, 
        datasets: [{
            data: expenseValues, 
            backgroundColor: [
                'rgba(219, 24, 24, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(248, 252, 9, 0.8)',
                'rgba(27, 198, 221, 0.8)'
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: 'Expense Overview'
            }
        }
    }
});


