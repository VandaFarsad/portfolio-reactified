import { Icon } from "@iconify/react";
import { iconData } from "../api/iconData";

const Stack = () => {
  return (
    <section id="stack" className="w-full h-screen font-sans flex flex-col justify-center items-center">
      <div className="col-md-12 mx-auto pb-10 pt-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Tech Stack</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {iconData.map((data, index) => (
          <div key={index} className="flex flex-col justify-center items-center px-8">
            <Icon icon={data.icon} height={125} />
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
