import { useState } from "react";

const AddTask = ({ onTaskAdd }) => {
  const [text, setText] = useState("");
  const [dayAndTime, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }

    onTaskAdd({ text, dayAndTime, reminder });
    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Activity* </label>
        <input
          type="text"
          name=""
          placeholder="Enter activity..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date and Time </label>
        <input
          type="text"
          placeholder="Add Day & time"
          value={dayAndTime}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control check">
        <label>Set Reminder </label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddTask;
