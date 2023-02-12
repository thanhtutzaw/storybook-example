import { useState } from 'react';
import './App.css';
import Task from './components/Task.jsx';

function App() {
  const [task, settask] = useState(
    [{
      id: 1,
      title: 'hello world',
      state: 'TASK_INBOX'
    },
    {
      id: 2,
      title: 'hedfdfsdfdsd',
      state: 'TASK_INBOX'
    }
      , {
      id: 3,
      title: 'hello ',
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
    settask(
      task.map(t => t.id === id ? t.state !== 'TASK_PINNED' ? { ...t, state: 'TASK_PINNED' } 
      : 
      { ...t, state: 'TASK_INBOX' } : 
      t
      )
    )
  }
  return (
    <div className="App">
      {task.map((t) => (
        <Task key={t.id} onPinTask={onPinTask} onArchiveTask={onArchiveTask} task={t} />
      ))}
    </div>
  );
}

export default App;