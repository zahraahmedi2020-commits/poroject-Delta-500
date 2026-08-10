# 💰 Project 17 - Expense Tracker

A practical Expense Tracker application built with **HTML, CSS, and Vanilla JavaScript** as part of the **Project Delta-500** learning roadmap.

This project focuses on transaction management, DOM manipulation, LocalStorage, data processing, reusable functions, debugging, and improved UI design.

---

## 🎯 Project Goals

* Build a practical Expense Tracker application.
* Practice JavaScript DOM manipulation.
* Manage income and expense transactions.
* Store application data using LocalStorage.
* Practice CRUD operations.
* Implement Search, Filter, and Sort.
* Improve validation and error handling.
* Practice reusable functions and code optimization.
* Improve UI structure and usability.
* Continue Git & GitHub workflow.
* Continue Linux / Ubuntu practice.
* Improve technical English through documentation.

---

## ✨ Features

* Add income and expense transactions.
* Edit existing transactions.
* Delete transactions.
* Display transactions in a structured table.
* Search transactions.
* Filter transactions.
* Sort transactions.
* Validate transaction data.
* Prevent negative expense amounts.
* Store transactions in LocalStorage.
* Calculate total income.
* Calculate total expenses.
* Calculate the final balance.
* Visually distinguish income and expenses.

---

## 🖥️ UI Design

Project 17 introduces a different UI structure compared with previous projects.

Instead of using a menu button to open and close the navigation menu, the navigation menu is displayed as a **fixed section on the left side**.

Each menu option displays its corresponding content section on the right side.

This structure provides a more organized and dashboard-like user experience.

---

## 🧠 JavaScript Concepts Practiced

* Variables and Data Types
* Functions
* Objects
* Arrays
* Array Methods
* `filter()`
* `sort()`
* `includes()`
* DOM Manipulation
* `createElement()`
* `appendChild()`
* Event Handling
* Form Validation
* LocalStorage
* Date Handling
* `getTime()`
* Conditional Logic
* Data Processing
* Reusable Functions

---

## 💾 Data Management

Transaction data is stored in **LocalStorage**.

Each transaction contains information such as:

* ID
* Title
* Amount
* Type
* Date

Date information is handled in two different forms:

### Display Date

A readable date format is used when displaying information to the user.

### Processing Date

A numeric timestamp generated with `getTime()` is used when sorting and processing dates.

This project reinforced an important concept:

> Data that is suitable for display is not always suitable for processing.

---

## 🔄 CRUD Operations

Project 17 implements the main CRUD operations.

### Create

Users can add new income and expense transactions.

### Read

Transactions are retrieved from LocalStorage and displayed dynamically in a table.

### Update

Existing transactions can be edited and updated after validation.

### Delete

Transactions can be deleted from the application and LocalStorage.

---

## 🔍 Search, Filter & Sort

The application provides several ways to work with transaction data.

### Search

Transactions can be searched using the available transaction information.

### Filter

Transactions can be filtered based on their type or other available criteria.

### Sort

Transaction data can be sorted using JavaScript array methods.

The project reinforces the use of:

```javascript
filter()
sort()
includes()
```

---

## 💰 Financial Summary

The application processes transaction data to calculate:

* Total Income
* Total Expenses
* Balance

Income and expenses are also visually distinguished to make the financial information easier to understand.

---

## ♻️ Code Reuse & Optimization

One of the important goals of Project 17 was improving code quality.

Instead of repeating similar code, reusable functions were created for tasks such as:

* Creating table elements
* Displaying transaction data
* Processing transaction data
* Updating the UI
* Managing application logic

The goal was not simply to write less code, but to make the code:

* Cleaner
* Reusable
* Easier to understand
* Easier to maintain
* Easier to debug

---

## 🐛 Debugging Approach

Debugging was performed step by step during development.

The process included:

1. Identifying unexpected behavior.
2. Checking the actual data.
3. Using `console.log()` to inspect variables.
4. Checking data types.
5. Following the execution flow.
6. Finding the logical problem.
7. Fixing the problem.
8. Testing the feature again.

`console.log()` continued to be one of the main debugging tools throughout the project.

---

## 🐧 Linux / Ubuntu Track

Linux practice continued alongside the JavaScript development track.

Ubuntu was practiced inside a virtual machine.

Topics practiced include:

* Terminal commands
* File and directory management
* Basic Linux workflow

The long-term goal is to connect Linux skills with:

**Python → Automation → Network Automation**

---

## 🌐 Git & GitHub Track

Git and GitHub were used throughout the development process.

Typical workflow:

```bash
git status
git add .
git commit -m "Project 17 update"
git push
```

The project is maintained as part of the **Project Delta-500** repository.

---

## 🇬🇧 English Track

Technical English practice continued through:

* Reading technical documentation.
* Using English programming terminology.
* Writing README documentation.
* Writing Git commit messages in English.
* Using English names for variables and functions.

---

# 📚 Lessons Learned

### 1. Data Types Matter

Before writing an algorithm, always check the actual data type being processed.

### 2. Display Data Is Not Always Processing Data

A human-readable date may not be the correct format for sorting or calculations.

### 3. Reusable Functions Improve Code Quality

Repeated logic should be identified and converted into reusable functions.

### 4. Debugging Should Be Systematic

Instead of guessing, inspect the actual program output and follow the data through the application.

### 5. `console.log()` Is a Powerful Debugging Tool

It can quickly reveal what the application is actually doing.

### 6. UI Structure Matters

Changing the navigation structure can significantly improve usability.

### 7. Code Optimization Is More Than Reducing Code Size

Good optimization should improve readability, maintainability, and reusability.

### 8. Features Can Affect Other Parts of the Application

Changing the structure of one feature may require changes in other parts of the application.

### 9. Build Step by Step

Implementing and testing features one at a time makes debugging easier and reduces the complexity of problems.

---

## 🏆 Skills Improved

Through Project 17, the following skills were strengthened:

* JavaScript
* DOM Manipulation
* CRUD
* LocalStorage
* Array Methods
* Data Processing
* Form Validation
* Date Handling
* UI Design
* Code Reuse
* Debugging
* Git & GitHub
* Linux / Ubuntu
* Technical English

---

## 📁 Project Structure

```text
Project-17/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript (ES6)
* LocalStorage API
* Git
* GitHub
* VS Code
* Ubuntu / Linux

---

## 📌 Project Status

✅ **Completed**

---

## 🚀 Next Step

Project 17 completes another major step in the **Project Delta-500** learning roadmap.

The next stage will focus on increasing JavaScript complexity and gradually moving toward:

**Advanced JavaScript → React → Python → Linux → Network Automation**

---

## 👨‍💻 Author

**Network Engineer**
**M.Sc. in Networking**

**Project Delta-500**
