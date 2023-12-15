import { useEffect, useState } from "react";
import { iconData } from "../api/iconData";

const Stack = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsSmallScreen(window.innerWidth < 641);
    });
  }, []);

  return (
    <section id="stack" className="w-full p-4 sm:p-10 md:p-40 font-sans flex flex-col justify-center items-center">
      <div className="col-md-12 mx-auto pb-10 pt-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600">Tech Stack</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 px-4">
        {iconData.map((data, index) => (
          <div key={index} className="flex flex-col justify-center items-center px-4 sm:px-8">
            <span
              className={
                "lg:h-20 lg:w-20 md:h-15 md:w-15 h-10 w-10 icon-[" + data.iconSetPrefix + "--" + data.iconName + "]"
              }
            ></span>
            <p className="text-sm sm:text-base">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
