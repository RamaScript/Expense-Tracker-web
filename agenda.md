# 📘 Expense Manager Web + App (Phase 1)

## 🧭 Project Overview

**Goal**:  
Build a personal expense manager web + mobile app (cross-platform) that allows users to:

- Create multiple accounts (e.g., Cash, Bank, Wallets)
- Categorize income and expenses into custom-defined or pre-set groups
- Add detailed transactions
- View financial analysis through interactive and insightful graphs (Pie, Bar, Line, etc.)

This version is strictly focused on **logging and analyzing** income and expenses.  
Budgeting and automation will be introduced in **Phase 2**.

---

## 📌 Versioning Plan

### ✅ Version 1.0 (Core Functionality)
- Multi-account support
- Two-tier Category system (Income & Expense)
- Add/view/delete transactions
- Data visualization (monthly/yearly/custom period)
- Filtering and Sorting
- Export to CSV/JSON

### 🚧 Version 2.0 (Planned)
- Budget Tracking
- Notifications for overspending
- Recurring Transactions
- Tags and Search
- Multi-user support (optional for shared household tracking)

---

## 📂 Features & Modules – Version 1.0

### 1. 👥 Account Management
- Users can create multiple **Accounts**: e.g., `Cash`, `Savings Account`, `GPay`, `Crypto Wallet`, etc.
- Each transaction will be tied to one account.
- Account balance should update automatically based on transactions.

### 2. 📂 Category System
Split into:

- **Income Categories**: Examples:
  - Salary
  - Freelance Projects
  - Refunds
  - Bonus
  - Interest

- **Expense Categories**: Examples:
  - Rent
  - Fast Food
  - Phone Recharge
  - Transportation
  - Groceries
  - Education

Categories should be:
- User-configurable (add/edit/delete)
- Stored distinctly under income/expense type

### 3. 💸 Transaction Management
Users can log every transaction with the following fields:

| Field        | Type         | Description                                   |
|--------------|--------------|-----------------------------------------------|
| Type         | Enum         | `Income` or `Expense`                         |
| Category     | Select       | Pulled from respective category list         |
| Account      | Select       | Which account is affected                     |
| Amount       | Decimal      | Amount of transaction                         |
| Date & Time  | DateTime     | Date and time of transaction                  |
| Note         | Text (opt.)  | Optional short description (max 250 chars)    |

Functionality:
- Add Transaction
- Edit/Delete Transaction
- View Transaction History (filter by date/category/account/type)

### 4. 📊 Analytics Dashboard
Graphs and summaries will be central to this version:

- Pie Charts → Expense vs Income distribution
- Bar Graphs → Month-wise comparisons
- Line Graphs → Cumulative income vs expense trend

**Filters:**
- Date Range
- Account-specific view
- Category-specific breakdown

### 5. 🔍 Filter + Export
- Allow users to filter transaction data by:
  - Date range
  - Type (Income / Expense)
  - Account
  - Category
- Export filtered data as `.csv` or `.json`

---

## 🛠 Tech Stack (Suggested)

| Layer             | Technology        |
|------------------|-------------------|
| Frontend (Web)    | React / Next.js or Flutter Web |
| Frontend (Mobile) | Flutter (Android + iOS) |
| Backend API       | Node.js + Express / Django REST |
| Database          | PostgreSQL or Firebase Firestore |
| Auth (if needed)  | Firebase Auth / JWT |
| Charts            | Chart.js / ECharts / Flutter Charts |
| Hosting           | Vercel + Firebase Hosting |

---

## 🧪 Development Milestones

| Milestone                        | Target Date     | Status     |
|----------------------------------|------------------|------------|
| Finalize UI/UX wireframes        | [To be filled]   | ❌         |
| Backend Schema & API Design      | [To be filled]   | ❌         |
| Build Category & Account Modules | [To be filled]   | ❌         |
| Build Transaction System         | [To be filled]   | ❌         |
| Integrate Charts/Graphs          | [To be filled]   | ❌         |
| Testing (Unit + E2E)             | [To be filled]   | ❌         |
| Launch MVP (Web + App)           | [To be filled]   | ❌         |

---

## ⚠️ Known Limitations in v1.0

- No budgets or warnings on overspending
- No recurring or auto-transactions
- No user login/authentication unless explicitly added
- No shared accounts or team use (single-user only)
- No offline-first features (planned in mobile version v2.0)

---

## 📌 Summary

This agenda sets the roadmap for building a clean, scalable, and insightful expense tracking system. Future iterations can build on this core with budgeting, smart suggestions, and collaborative features.
