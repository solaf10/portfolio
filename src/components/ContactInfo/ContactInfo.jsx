import "./ContactInfo.css";

const ContactInfo = ({ icon, title, info }) => {
  return (
    <div className="contact-info">
      <div className="icon-holder">{icon}</div>
      <div className="text">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
