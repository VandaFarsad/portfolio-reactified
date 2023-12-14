import { TypeAnimation } from "react-type-animation";
import manAtWork from "../assets/man_at_work.svg";

const Header = () => {
  return (
    <div className="w-full sm:h-screen font-mono container mx-auto flex px-4 sm:px-10 py-10 sm:py-20 flex-col items-center">
      <img className="w-3/4 sm:max-w-sm md:max-w-lg" alt="hero" src={manAtWork} />
      <h1 className="font-semibold pt-2 md:pt-8 text-lg sm:text-xl md:text-2xl ">
        <TypeAnimation sequence={["Dr. Vanda Farsad"]} wrapper="span" speed={30} repeat={0} cursor={false} />
      </h1>
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
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Header;
