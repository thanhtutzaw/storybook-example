import Task from "./Task.jsx";
import PropTypes from "prop-types";
export default function TaskList({
  task,
  onPinTask,
  onArchiveTask,
  loading = false,
  empty,
}) {
  const events = {
    onPinTask,
    onArchiveTask,
  };
  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </div>
    );
  }
  if (task.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }
  // const orderedTask = [
  //   ...task
  // ];
  const orderedTask = [
    ...task.filter((t) => t.state === "TASK_PINNED"),
    ...task.filter((t) => t.state !== "TASK_PINNED"),
  ];
  return (
    <div className="list-items">
      {orderedTask.map((t) => (
        <Task key={t.id} {...events} task={t} />
      ))}
    </div>
  );
}

function Loading() {
  return (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
}
TaskList.propTypes = {
  loading: PropTypes.bool,
  task: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};
