import "./Contact.css";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import {} from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = ({ ref }) => {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const contactInfos = [
    {
      id: 1,
      icon: <IoCallOutline />,
      title: "Call me",
      info: "+963967266989",
    },
    {
      id: 2,
      icon: <HiOutlineEnvelope />,
      title: "Email me",
      info: "alfaressolaf1@gmail.com",
    },
    {
      id: 3,
      icon: <IoLocationOutline />,
      title: "Address",
      info: "Homs,syria",
    },
  ];
  // const notify = (status) => toast(status, { position: "top-center" });
  const notify = (status) => toast(status);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (res) => {
          console.log("SUCCESS!", res.status, res.text);
          notify("Message sent successfully!");
          form.current.reset();
          setIsLoading(false);
        },
        (err) => {
          console.log("FAILED...", err);
          notify("Failed to send message. Please try again.");
          setIsLoading(false);
        }
      );
  };
  return (
    <section className="contact" id="contact" ref={ref}>
      <ToastContainer />
      <div className="container">
        <div className="section-title">
          <p>Contact</p>
          <h2>
            Let’s Discuss Your <span>Projects</span>
          </h2>
        </div>
        <div className="content">
          <div className="contact-infos">
            {contactInfos.map((contactInfo) => (
              <ContactInfo
                key={contactInfo.id}
                icon={contactInfo.icon}
                title={contactInfo.title}
                info={contactInfo.info}
              />
            ))}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" required name="name" placeholder="Full name" />
            <input
              type="email"
              required
              name="email"
              placeholder="Your email"
            />
            <input type="tel" name="phone" placeholder="Phone number" />
            <textarea required name="message" placeholder="Message"></textarea>
            <input
              className={isLoading ? "btn disabled" : "btn"}
              type="submit"
              value={isLoading ? "wait..." : "Send Message"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
