import { TypeAnimation } from "react-type-animation";
import manAtWork from "../assets/man_at_work.svg";
import GitHubCorner from "./GitHubCorner";

const Header = () => {
  return (
    <div className="w-full h-screen font-mono container mx-auto flex px-4 sm:px-10 py-10 sm:py-20 flex-col items-center justify-center">
      <GitHubCorner />
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
      <a
        href={`mailto:contact@initial-commit.com`}
        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
        title="mailto:contact@initial-commit.com"
      >
        Contact me
      </a>
    </div>
  );
};

export default Header;
