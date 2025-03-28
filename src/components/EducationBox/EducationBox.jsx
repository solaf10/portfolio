import "./EducationBox.css";

const EducationBox = ({ title, desc }) => {
  return (
    <div className="box">
      <div className="circle"></div>
      <div className="text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default EducationBox;
