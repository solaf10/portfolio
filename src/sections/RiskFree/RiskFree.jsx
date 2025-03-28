import "./RiskFree.css";
import { IoMdArrowRoundForward } from "react-icons/io";

const RiskFree = ({ ref }) => {
  return (
    <div className="risk-free-holder" ref={ref}>
      <div className="risk-free">
        <div className="container">
          <div className="text">
            <h2>Try me out, risk free!</h2>
            <p>
              If you’re not happy with the design after the first draft, I’ll
              refund your deposit, <span>no questions asked</span>
            </p>
          </div>
          <a href="#contact" className="btn">
            <span>Contact</span>
            <IoMdArrowRoundForward className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RiskFree;
