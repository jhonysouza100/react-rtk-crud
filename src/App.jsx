// import { useSelector } from 'react-redux';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  // const taskState = useSelector(state => state.tasks)
  // console.log(taskState)
  return (
    <div>
      <h1>Hello World</h1>
      <hr />
      <TaskForm />
      <hr />
      <TaskList />
    </div>
  );
}

export default App;