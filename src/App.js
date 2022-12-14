import Header from './components/Header';
import './index.css';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/Addtask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{id: 1, text: 'Test it out🙂', dayAndTime: '29th November 2022 @ 11:00pm', reminder: true}])

  const handleDelete=(id)=>{
    const taskss = tasks.filter(e => e.id !== id)
    setTasks(taskss)
  }

  const handleToggle=(id)=>{
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask=(task)=>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const toggleShow=()=>{
    let show = !showAddTask
    setShowAddTask(show)

  }


  return (
    <div className="container">
      <Header title='To-Do App' toggleShow={toggleShow} showAddTask={showAddTask}/>
      {!showAddTask ? <AddTask showAddTask={showAddTask} onTaskAdd={addTask}/> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggle}/> : 'No Available Activities'}
    </div>
  );
}

export default App;
