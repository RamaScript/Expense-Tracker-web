export const transactions = {
    accounts: [
        { id: 1, account: "Cash", balance: 5000 },
        { id: 2, account: "Bank", balance: 15000 },
        { id: 3, account: "UPI", balance: 8000 },
        { id: 4, account: "Savings", balance: 20000 },
        { id: 5, account: "Wallet", balance: 1200 },
        { id: 6, account: "Credit Card", balance: -3000 }
    ],

    categories: {
        income: [
            { id: 101, categoryName: "Salary", total: 25000 },
            { id: 102, categoryName: "Freelance", total: 8000 },
            { id: 103, categoryName: "Gift", total: 3000 },
            { id: 104, categoryName: "Investment", total: 5000 },
            { id: 105, categoryName: "Refund", total: 2000 }
        ],
        expense: [
            { id: 201, categoryName: "Food", total: 3000 },
            { id: 202, categoryName: "Transport", total: 1000 },
            { id: 203, categoryName: "Shopping", total: 4000 },
            { id: 204, categoryName: "Utilities", total: 2500 }
        ]
    },

    transaction: [
        { id: 1001, account: "Cash", category: "income", type: "Salary", transaction: 12000, description: "July salary" },
        { id: 1002, account: "Bank", category: "income", type: "Gift", transaction: 1500, description: "Gift from uncle" },
        { id: 1003, account: "UPI", category: "income", type: "Freelance", transaction: 3000, description: "Website project" },
        { id: 1004, account: "Bank", category: "income", type: "Investment", transaction: 2000, description: "Mutual funds" },
        { id: 1005, account: "Savings", category: "income", type: "Salary", transaction: 13000, description: "August salary" },
        { id: 1006, account: "Wallet", category: "income", type: "Refund", transaction: 1000, description: "Product return" },
        { id: 1007, account: "UPI", category: "expense", type: "Food", transaction: 800, description: "Dinner at hotel" },
        { id: 1008, account: "Cash", category: "expense", type: "Transport", transaction: 300, description: "Cab fare" },
        { id: 1009, account: "Credit Card", category: "expense", type: "Shopping", transaction: 1500, description: "Clothes" },
        { id: 1010, account: "Bank", category: "expense", type: "Utilities", transaction: 900, description: "Electricity bill" },
        { id: 1011, account: "Wallet", category: "expense", type: "Food", transaction: 250, description: "Snacks" },
        { id: 1012, account: "Bank", category: "income", type: "Freelance", transaction: 5000, description: "Mobile app" },
        { id: 1013, account: "UPI", category: "income", type: "Gift", transaction: 1500, description: "Birthday gift" },
        { id: 1014, account: "Cash", category: "expense", type: "Transport", transaction: 200, description: "Bus pass" },
        { id: 1015, account: "Savings", category: "expense", type: "Shopping", transaction: 1200, description: "Online deal" },
        { id: 1016, account: "Credit Card", category: "expense", type: "Utilities", transaction: 1100, description: "Water bill" },
        { id: 1017, account: "UPI", category: "income", type: "Investment", transaction: 3000, description: "Stocks" },
        { id: 1018, account: "Cash", category: "income", type: "Refund", transaction: 1000, description: "Tax refund" },
        { id: 1019, account: "Bank", category: "expense", type: "Food", transaction: 600, description: "Lunch" },
        { id: 1020, account: "Wallet", category: "expense", type: "Transport", transaction: 500, description: "Auto fare" }
    ]
};
