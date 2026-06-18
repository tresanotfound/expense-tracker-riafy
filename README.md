# Expense Tracker – Riafy Technical Challenge

A modern and responsive personal expense tracking web application built using React and Vite. The application allows users to manage daily expenses with filtering, editing, deletion, and monthly summaries.

---

# Features

## Expense Management

* Add new expenses
* Edit existing expenses
* Delete expenses

## Expense Details

Each expense includes:

* Title
* Amount
* Category
* Date
* Optional note

## Filtering & Search

* Filter by category
* Filter by date range
* Search by title

## Monthly Summary

* Total monthly expenses
* Category-wise expense breakdown

## Persistence

* Data persistence using browser localStorage

## UI

* Responsive modern dashboard-style interface
* Minimal and clean user experience

---

# Tech Stack

## Frontend

* React.js
* Vite
* CSS3

## Persistence / Storage

* Browser localStorage

---

# Why This Stack?

Given the 2-hour challenge constraint, the focus was on building a stable, functional, and polished end-to-end application quickly.

React + Vite was chosen because:

* Fast development setup
* Component-based architecture
* Efficient state management for small-scale applications
* Excellent developer experience

localStorage was used as the persistence layer to:

* Avoid backend setup overhead
* Ensure data persistence across refreshes
* Prioritize delivering a complete working product within the time limit

---

# How to Run the Project

## Clone the Repository

```bash
git clone <YOUR_GITHUB_REPO_LINK>
```

## Navigate into the Project

```bash
cd expense-tracker
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Open in Browser

```bash
http://localhost:5173
```

---

# Project Structure

```txt
src/
│
├── components/
│   ├── ExpenseForm.jsx
│   ├── ExpenseList.jsx
│   ├── FilterBar.jsx
│   └── Summary.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

# Tradeoffs & Design Decisions

## Chosen Approach

The application was intentionally kept frontend-focused with localStorage persistence to maximize stability and ensure all required functionality was completed within the given time.

## What Was Prioritized

* Functional CRUD operations
* Clean UI/UX
* Filtering and sorting
* Monthly summaries
* Data persistence
* Responsive layout
* Code readability

## What Was Skipped

The following were intentionally not implemented due to time constraints:

* Backend/API integration
* Database setup
* Authentication
* User accounts
* Charts/analytics visualizations
* Unit/integration testing
* Dark mode
* Advanced state management libraries

---

# Known Rough Edges

* localStorage is browser-specific and not suitable for production-scale persistence
* No multi-user support
* No server-side validation
* Filters are client-side only
* Data reset occurs if browser storage is cleared

---

# Future Improvements

If given more time, the following enhancements would be added:

* Node.js/Express backend
* Database integration (MongoDB/PostgreSQL)
* Authentication & user accounts
* Charts and analytics dashboard
* Export expenses as CSV/PDF
* Mobile responsiveness improvements
* Unit and integration tests
* Dark mode support

---

# Conclusion

The goal of this submission was to build a clean, reliable, and user-friendly expense tracker within the challenge constraints while prioritizing usability, functionality, and maintainable code structure.

