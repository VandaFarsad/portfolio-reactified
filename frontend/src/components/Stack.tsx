import { Icon } from "@iconify/react";
import { iconData } from "../api/iconData";

const Stack = () => {
  return (
    <section id="stack" className="w-full h-screen font-sans flex flex-col justify-center items-center">
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
