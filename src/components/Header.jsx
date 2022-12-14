import Button from "./Button";

const Header = ({ title, toggleShow, showAddTask }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        text={showAddTask ? "Add" : "Close"}
        color={showAddTask ? "black" : "darkred"}
        toggleShow={toggleShow}
        showAddTask={showAddTask}
      />
    </div>
  );
};

export default Header;
