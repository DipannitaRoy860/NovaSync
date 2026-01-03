# NovaSync – Group Expense Management System

NovaSync is a web-based group expense management application.  
The goal of the project is to understand full-stack development using the MERN stack and to design a system for tracking shared group expenses.

---

## Project Objective

- To create groups and manage members
- To record shared expenses
- To split expenses among group members
- To display expense records in a ledger format
- To conceptually design a settlement system

---

## Tech Stack Used

** Frontend**

- React.js
- JavaScript
- CSS

** Backend**

- Node.js
- Express.js

** Database**

- MongoDB
- Mongoose

** Security**

- bcrypt (password hashing)

---

## User Authentication

- User registration and login implemented
- Passwords are securely stored using bcrypt hashing
- Password comparison is done during login using bcrypt

---

## Group & Member Management

- Users can create a group
- Members can be added to a group
- Group data is stored in MongoDB
- A minimum member structure is maintained

---

## Expense Management (Implemented Logic)

- Users can add an expense with:
  - Total amount
  - Split type (percentage,equal,exact)
- Expense shares are calculated based on

  1.percentage:

       individual share = (percentage × total amount)/100

  2.equal:

       individual share = predefined by the expense creator

  3.Equal:

       individual share = total amount/no of members

- Calculated shares are stored per member

---

## Ledger (Partially Implemented)

- Expense title
- Total amount
- Member-wise shar
- Ledger data is fetched from backend APIs

---

## Settlement (Conceptual / Partial)

- Settlement logic is designed to calculate balances
- Full settlement flow is not completely finalized
- Current implementation focuses on balance calculation concept

---

## Project Structure

frontend/
pages/
Login.js
Register.js
Dashboard.js
Group.js
AddGroup.js
AddMember.js
AddExpense.js
Ledger.js
Settlement.js
components/
Navbar.js
App.js
style.css
backend/
models/
user.js
group.js
expense.js
controllers/
userController.js
groupController.js
expenseController.js
settlementController.js
routes/
userRoutes.js
groupRoutes.js
expenseRoutes.js
settlementRoutes.js
db.js
server.js

---

## Limitations

- Payment tracking (who paid) is not fully implemented
- Settlement flow is partially completed

---

## Demo Video

Demo video link:  
**. **

---

## AI Usage Declaration

AI tools were used **only for**:

- Understanding concepts
- Debugging errors
- Improving explanations and documentation

---

## Author

Dipannita Roy  
B.Tech – Computer Science and Engineering

# NovaSync
