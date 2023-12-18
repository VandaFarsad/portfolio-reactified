import { stackIconData } from "../api/stackIconData";

const Stack = () => {
  return (
    <section id="stack" className="w-full p-4 sm:p-10 md:p-40 font-sans flex flex-col justify-center items-center">
      <div className="col-md-12 mx-auto pb-10 pt-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600">Tech Stack</p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 px-4 pb-6">
        {stackIconData.map((data, index) => (
          <div key={index} className="flex flex-col justify-center items-center px-4 sm:px-8">
            <span className={data.icon}></span>
            <p className="text-sm sm:text-base">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;

