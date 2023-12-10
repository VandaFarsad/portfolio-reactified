import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div>
      <div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Hey! I'm Vanda",
          ]}
          wrapper="span"
          speed={30}
          style={{ fontSize: "3em", display: "inline-block" }}
          repeat={0}
          cursor={false}
        />
      </div>
      <div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Senior Backend Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "DevOps experienced",
            1000,
            "Fullstack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Header;
