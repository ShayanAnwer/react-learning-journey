import { useState } from 'react';

function TaskState(props) {
  // 1. Declare a state variable for task completion
  const [isDone, setIsDone] = useState(false);

  return (
    <div style={{ marginBottom: '10px' }}>
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        📌 {props.title}
      </span>
      {' '}
      {/* 2. Toggle state when clicked */}
      <button onClick={() => setIsDone(!isDone)}>
        {isDone ? 'Mark Complete' : 'Mark Incomplete'}
      </button>
    </div>
  );
}

function Counter() {
  // Array destructuring gives us two things:
  // 1. count: the current value of the state
  // 2. setCount: the function used to update that value
  const [count, setCount] = useState(0); // 0 is the initial state value

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>🎯 Personal Task Dashboard</h1>
      <p>Welcome! Let's master React step by step.</p>
    </header>
  );
}

// 1. Define the component to accept props
function UserGreeting(props) {
  return <h2>Welcome back, {props.name}! 👋</h2>;
}

function TaskItem(props) {
  return (
    <li>
      Task: {props.title} | Completed: {props.isCompleted}
    </li>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <UserGreeting name="Shayan" />
      <ul>
        <TaskItem title="Learn React Props" isCompleted="True" />
      </ul>
      <Counter />
      <TaskState title="Learn React State" />
      <TaskState title="Practice GitHub Workflow" />
    </div>
  );
}