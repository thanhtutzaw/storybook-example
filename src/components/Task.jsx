import PropTypes from "prop-types";
export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    // <div style={{position:'absolute' , top:id*6+'vh'}} className={`list-item ${state}`}>
    <div  className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
        onClick={() => onArchiveTask(id)}
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
          // checked={false}
        />
        <span className="checkbox-custom" />
      </label>
      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly
          name="title"
          placeholder="Input Task"
        ></input>
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
// Task.defaultProps = {
//   tast: {
//     id: 1,
//     title: "my task",
//     state: "TASK_INBOX",
//   },
//   onArchiveTask: undefined,
//   onPinTask: undefined,
// };
