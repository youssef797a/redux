
import AddTask from './AddTask';
import './App.css';
import ListTask from './ListTask';
import { useSelector } from 'react-redux';


function App() {
  const tasks = useSelector(state => state.taskReducer.tasks) 
 console.log(tasks);
  return (
    <div className="App">
      <h1>todo list with redux</h1>
      <AddTask />
      <ListTask tasks={tasks}/>
    </div>
    
  );
}

export default App;
