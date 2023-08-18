import './App.css';
import { useState } from 'react';
import Task from './Task';

function App() {
  const [tasks,setTasks] = useState([
    { text: 'Go to gym', checked: true},
    { text: 'Drink coffee', checked: false}
  ])

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO add a new task to the tasks array
    // HINT: Spread the current tasks array into a new array, add this new task on there then update the state of tasks
    setTasks([...tasks, {text: event.target[0].value, checked: false}])
    event.target[0].value = ''
  }

  const handleDelete = (index) => {
    //TODO Using the provided index, remove the task from the array and update state to re-render the component
    //HINT: .filter()
    setTasks(tasks.filter(toDoItem => tasks.indexOf(toDoItem) !== index))
  }

  const handleUpdate = (index, checked) => {
    //TODO Find the task by the provided index
    //Change the checked property on the task
    //Update the state array to re-render the component
    //HINT: .map() or access by index
    tasks[index].checked = checked
    setTasks([...tasks])
  }

  return (
    <div className='app'>
      <main>
        <form onSubmit={handleSubmit}>
          <input type='text' name='tast' />
          <button type='sybmit'>Add task</button>
        </form>

      {
        tasks.map((todoItem,index) => {
          return (
            <Task key={index} todoItem={todoItem} index={index} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
          );
        })
      }
      </main>
    </div>
  );
}

export default App;
