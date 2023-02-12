import { useState } from 'react';
import './App.css';
import Task from './components/Task.jsx';

function App() {
  // const task = {

  // }

  const [task, settask] = useState(
    [{
      id: 1,
      title: 'hello world',
      // state: 'TASK_ARCHIVED'
      state: 'TASK_INBOX'
    },
    {
      id: 2,
      title: 'hedfdfsdfdsd',
      // state: 'TASK_ARCHIVED'
      state: 'TASK_INBOX'
    }
      , {
      id: 3,
      title: 'hello ',
      // state: 'TASK_ARCHIVED'
      state: 'TASK_INBOX'
    }]
  );
  function onArchiveTask(id) {
    settask(
      task.map(t => t.id === id ? t.state !== 'TASK_ARCHIVED' ? { ...t, state: 'TASK_ARCHIVED' } 
      : 
      { ...t, state: 'TASK_INBOX' } : 
      t
      )
    )
  }
  function onPinTask(id) {
    alert(id)
  }
  return (
    <div className="App">
      {task.map((t) => (
        <Task key={t.id} onPinTask={onPinTask} onArchiveTask={onArchiveTask} task={t} />
      ))}
      {/* <Task onPinTask={onPinTask} onArchiveTask={onArchiveTask} task={task} /> */}
      {/* <Task onPinTask={onPinTask} onArchiveTask={onArchiveTask} task={task} /> */}
    </div>
  );
}

export default App;

