import { TypeAnimation } from "react-type-animation";
import manAtWork from "../assets/man_at_work.svg";

const Header = () => {
  return (
    <div className="Header">
      <img className="responsiveImage" src={manAtWork} alt="Vanda" />
      <div>
        <TypeAnimation
          sequence={["Hey! I'm Vanda"]}
          wrapper="span"
          speed={30}
          style={{ fontSize: "1.5em", display: "inline-block" }}
          repeat={0}
          cursor={false}
        />
      </div>
      <div>
        <TypeAnimation
          sequence={[
            "Senior Backend Developer",
            1000, // wait 1s
            "DevOps experienced",
            1000,
            "Fullstack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Header;
