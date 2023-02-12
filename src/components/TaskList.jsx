import Task from "./Task.jsx";

export default function TaskList({
  task,
  onPinTask,
  onArchiveTask,
  loading,
  empty,
}) {
  const events = {
    onPinTask,
    onArchiveTask,
  };
  if(loading){
    return <div className="list-items">Loading</div>
  }
  if(task.length === 0){
    return <div className="list-items">Empty</div>
  }
  return (
    <div className="list-items">
      {task.map((t) => (
        <Task key={t.id} {...events} task={t} />
      ))}
    </div>
  );
}
