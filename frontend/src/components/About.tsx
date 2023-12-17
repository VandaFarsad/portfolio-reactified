import photo from "../assets/foto.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full p-4 sm:p-10 lg:p-40 font-sans bg-slate-500 flex flex-col justify-center items-center"
    >
      <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600">About</p>
      <div className="w-full pt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 pb-6">
        <img
          className="rounded-2xl shadow-2xl shadow-slate-300 max-w-xs mx-auto sm:max-w-sm sm:max-h-xl lg:mr-4"
          src={photo}
          alt="portrait"
        />
        <article className="max-w-xs mx-auto sm:max-w-sm sm:max-h-xl lg:max-w-xl lg:ml-4 p-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-slate-300">
          <h2 className="mb-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">Hey!</h2>
          <p className="text-sm lg:text-lg">
            Ich bin Vanda und bringe Python-Kenntnisse sowie Erfahrung in DevOps und Frontend-Technologien mit. Gerne
            stehe ich zur Verfügung, um dich bei der Konzeption, Entwicklung und Optimierung deiner Webanwendungen zu
            unterstützen.
            <br />
            <br />
            Lass uns gemeinsam innovative und wirkungsvolle Lösungen entwickeln, um die Effizienz der Arbeitsprozesse in
            deinem Unternehmen zu erhöhen.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
