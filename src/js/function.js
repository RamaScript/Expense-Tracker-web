import { balanceDisplay, transactionType, message, incomeCategory, expenseCategory } from './dom.js'
import { transactionJson } from '../../srr.js'

// Utility Functions
function updateBalance() {
    balanceDisplay.innerText = `Balance: ₹${Number(window.balance).toFixed(2)}`;
}

function clearMessageAfterDelay() {
    message.style.opacity = 1;
    setTimeout(() => {
        message.style.opacity = 0;
    }, 3000);
}

function createtran(id, account, category, inputcat, amount, description) {
    // id += 1
    const now = new Date();
    let demodata = transactionJson.accounts
    let existingIds = transactionJson.transaction.map(t => t.id);

    // Create transaction row
    let tableRow = document.createElement("tr");

    let tableID = document.createElement("td")
    tableID.innerText = id;

    let taccount = document.createElement("td");
    taccount.innerText = account;

    let tcategory = document.createElement("td");
    tcategory.innerText = category;

    let tabledtype = document.createElement("td");
    tabledtype.innerText = inputcat;

    let tTransactionType = document.createElement("td");

    let tdescription = document.createElement("td");
    tdescription.innerText = description;

    let tableDate = document.createElement("td")
    tableDate.innerText = now.toISOString().split('T')[0];

    let tdeleteBtn = document.createElement("td");
    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("addbtn");
    deleteBtn.style.backgroundColor = "red";

    // Add or subtract based on income/expense
    if (tcategory.innerText === "income") {
        window.balance += amount;

        tTransactionType.innerText = `+${amount.toFixed(2)}`;
        tTransactionType.style.color = "green";

        for (let i in demodata) {
            if (demodata[i].account === account && !existingIds.includes(id)) {
                demodata[i].balance += amount
            }
            localStorage.setItem("transaction_data", JSON.stringify(transactionJson));
        }

    } else if (tcategory.innerText === "expense") {
        window.balance -= amount;
        tTransactionType.innerText = `-${amount.toFixed(2)}`;
        tTransactionType.style.color = "red";
        for (let i in demodata) {

            if (demodata[i].account === account && !existingIds.includes(id)) {
                demodata[i].balance -= amount
            }
            localStorage.setItem("transaction_data", JSON.stringify(transactionJson));
        }
    }
    updateBalance();

    // Delete logic
    deleteBtn.addEventListener("click", (e) => {
        const isIncome = tTransactionType.style.color === "green";
        if (isIncome) {
            balance -= amount;
        } else {
            balance += amount;
        }
        message.innerText = "Deleted."
        clearMessageAfterDelay();
        updateBalance();
        tableRow.remove();
        console.log(id);
        
        // localStorage.setItem("transaction_data", JSON.stringify(tableRow));

    });

    //editbtn
    let teditBtn = document.createElement("td");
    let editBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    editBtn.classList.add("dltbtn");
    editBtn.style.backgroundColor = "orange";
    teditBtn.appendChild(editBtn);
    editBtn.addEventListener("click", () => {

        const div = document.createElement("div")
        div.classList.add("editTable")

        let editaccount = document.createElement("input");
        editaccount.classList.add("inputcat");
        editaccount.value = account;

        let editCategory = document.createElement("select");
        editCategory.name = "type"
        editCategory.classList.add("inputcat");

        const incomeOption = document.createElement("option");
        incomeOption.value = "income";
        incomeOption.textContent = "Income";

        const expenseOption = document.createElement("option");
        expenseOption.value = "expense";
        expenseOption.textContent = "Expense";

        editCategory.append(incomeOption, expenseOption);

        let editType = document.createElement("input");
        editType.classList.add("inputcat");
        editType.value = inputcat

        let editTransactionType = document.createElement("input");
        editTransactionType.classList.add("inputcat");
        editTransactionType.value = amount

        let editdescription = document.createElement("input");
        editdescription.classList.add("inputcat");
        editdescription.value = description

        let NewEditBtn = document.createElement("button");
        NewEditBtn.innerText = "Done";
        NewEditBtn.classList.add("addbtn");
        NewEditBtn.style.width = "130px";
        NewEditBtn.addEventListener("click", () => {
            div.remove()

            taccount.innerText = editaccount.value;
            tcategory.innerText = editCategory.value;
            tabledtype.innerText = editType.value

            let newamount = editTransactionType.value

            if (tcategory.innerText === "income") {
                window.balance += newamount;
                tTransactionType.innerText = `+${newamount}`;
                tTransactionType.style.color = "green";

            } else if (tcategory.innerText === "expense") {
                window.balance -= newamount;
                tTransactionType.innerText = `-${newamount}`;
                tTransactionType.style.color = "red";
            }
            tdescription.innerText = editdescription.value
            message.innerText = "Done."
            clearMessageAfterDelay();
            updateBalance()
            transactionJson.transaction.push({
                id: id.value,
                account: editaccount.value,
                category: editCategory.value,
                type: editType.value,
                transaction: parseFloat(editTransactionType.value),
                description: editdescription.value
            });
            localStorage.setItem("transaction_data", JSON.stringify(transactionJson));

        })

        let closebtn = document.createElement("button");

        closebtn.classList.add("addbtn");
        closebtn.style.backgroundColor = "red";
        closebtn.innerText = "Close";
        closebtn.style.marginTop = "1rem";
        closebtn.style.marginLeft = "1rem";
        closebtn.style.width = "70px";
        closebtn.addEventListener("click", () => {
            div.remove();
        })

        div.append(editaccount, editCategory, editType, editTransactionType, editdescription, NewEditBtn, closebtn)

        document.querySelector("table").appendChild(div);

        message.innerText = "Transection Created."

        clearMessageAfterDelay();

    });



    tdeleteBtn.appendChild(deleteBtn);
    tableRow.append(tableID, taccount, tcategory, tabledtype, tTransactionType, tdescription, tableDate, tdeleteBtn, teditBtn);

    document.getElementById("table-body").appendChild(tableRow);

}


function overview() {

    let totalincome = 0;
    let totalexpense = 0;

    for (let i = 0; i < transactionJson.transaction.length; i++) {
        const element = transactionJson.transaction[i];

        if (element.category == "income") {

            totalincome += element.transaction
        }
        else if (element.category == "expense") {

            totalexpense += element.transaction
        }
    }
    return { totalexpense, totalincome }
}


function overviewExp() {

    let oVExpList = {}
    for (let i of expenseCategory) {
        oVExpList[i] = 0;
    }

    for (let i = 0; i < transactionJson.transaction.length; i++) {
        const element = transactionJson.transaction[i];

        if (element.category == "expense") {

            if (!oVExpList[element.type]) {
                oVExpList[element.type] = 0;
            }
            oVExpList[element.type] += parseInt(element.transaction);
        }
    }
    return (oVExpList)
}


function overviewIn() {

    let oVInList = {}
    for (let i of incomeCategory) {
        oVInList[i] = 0;
    }

    for (let i = 0; i < transactionJson.transaction.length; i++) {
        const element = transactionJson.transaction[i];
        if (element.category == "income") {

            if (!oVInList[element.type]) {
                oVInList[element.type] = 0;
            }

            oVInList[element.type] += parseInt(element.transaction);

        }
    }
    return (oVInList)
}

export { updateBalance, clearMessageAfterDelay, createtran, overview, overviewExp, overviewIn };
