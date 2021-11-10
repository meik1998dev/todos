import './App.css';
import AddTodos from './components/AddTodos/AddTodos';
import TodosList from './components/TodosList/TodosList';
import Weather from './components/Weather/Weather';

function App() {
   return (
      <>
         <AddTodos/>
         <TodosList/>
         <Weather/>
      </>
   );
}

export default App;
