import "./ProgressHolder.css";

const ProgressHolder = ({ name, amount }) => {
  return (
    <div className="prog-holder">
      <h4>{name}</h4>
      <div className="prog">
        <span style={{ width: `${amount}%` }} data-progress={`${amount}%`}>
          <i className="circle"></i>
        </span>
      </div>
    </div>
  );
};

export default ProgressHolder;
