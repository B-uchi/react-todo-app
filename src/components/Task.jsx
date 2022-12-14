import { HiOutlineTrash } from "react-icons/hi";

const Task = ({ task, onDelete, onToggle }) => {
  const setClass = () => {
    let className = "task ";
    className += task.reminder ? "reminder" : "";
    return className;
  };
  return (
    <div className={setClass()} onDoubleClick={() => onToggle(task.id)}>
      <div>
        <h3>{task.text} </h3>
        <p>{task.dayAndTime}</p>
      </div>
      <div className="trash-icon">
        <HiOutlineTrash
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </div>
    </div>
  );
};

export default Task;
