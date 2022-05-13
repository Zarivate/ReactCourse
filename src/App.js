// This is a function that we export to make it available outside
// Only special thing is it returns this JSX code
// React components can be used like HTML elements
// React component = custom HTML element = function that returns JSX
// Prettier shortcut is crt + alt + F
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Keep Trying' />
      
    </div>
  );
}

export default App;
