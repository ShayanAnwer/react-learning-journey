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
    </div>
  );
}