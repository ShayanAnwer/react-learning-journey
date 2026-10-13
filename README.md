# ⚛️ My ReactJS Learning Journey

Welcome to my hands-on React learning repository! Here I document core concepts, interview questions, and code implementations.

---

## 📌 Phase 0: Setup & Git Notes

### Essential Commands

- `git status` - Check modified files
- `git add .` - Stage changes for commit
- `git commit -m "message"` - Save a snapshot of changes
- `git push` - Upload local changes to GitHub

---

## 📌 Phase 1: React Fundamentals & Setup

### Vite Setup Commands

- `npm create vite@latest <app-name> -- --template react` - Creates a modern React app scaffold.
- `npm run dev` - Starts the local development server (usually at `http://localhost:5173/`).

### Folder Structure Overview

- `src/` - Contains all our working React code.
- `src/App.jsx` - The main root component of our application.
- `src/main.jsx` - The entry point that connects React to the HTML file.

### Core Concepts

- **Components:** Reusable building blocks of a React UI. Must start with a capital letter and return JSX.
- **JSX:** A syntax extension for JavaScript that looks like HTML.
- **Props (Properties):** Arguments passed into React components via attributes to make them dynamic and reusable. Props are read-only!

## 📌 Phase 2: State & Interactivity

### State with `useState`

- **State:** Component memory that holds data changing over time. Changing state triggers a re-render.
- **Syntax:** `const [state, setState] = useState(initialValue);`
- **Rule:** Never mutate state directly (e.g., `count = 5`). Always use the updater function (`setCount(5)`).
