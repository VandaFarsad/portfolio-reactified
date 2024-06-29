import { TypeAnimation } from "react-type-animation";
import manAtWork from "../assets/man_at_work.svg";
import GitHubCorner from "./GitHubCorner";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-white dark:bg-slate-800 text-black dark:text-white">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
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
        href={`mailto:contact@stadtlueue.de`}
        className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-bold py-2 px-4 rounded mt-4 inline-block"
        title="mailto:contact@stadtlueue.de"
      >
        Contact me
      </a>
    </div>
  );
};

export default Header;
