const Button = ({ text, color, toggleShow }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn-add"
      onClick={toggleShow}
    >
      {text}
    </button>
  );
};

export default Button;
