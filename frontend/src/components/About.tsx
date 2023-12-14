import photo from "../assets/foto.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full p-4 sm:p-10 md:p-40 font-sans bg-slate-500 flex flex-col justify-center items-center"
    >
      <div className="col-md-12 mx-auto pb-10 pt-8">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600">About</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:px-10 lg:px-40 px-4">
        <img
          className="rounded-2xl shadow-2xl shadow-slate-300 max-w-xs sm:max-w-sm md:max-w-full mx-auto sm:mr-4"
          src={photo}
          alt="portrait"
        />
        <article className="p-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-slate-300">
          <h2 className="mb-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">Hey!</h2>
          <p>
            Mein Name ist Vanda. Mit meinen Python-Kenntnissen und meinem Wissen über DevOps und Frontend-Technologien
            freue ich mich darauf, dich bei der Konzeption, Entwicklung und Optimierung deiner Webanwendungen zu
            unterstützen.
            <br />
            <br />
            Lass uns gemeinsam neue und effiziente Lösungen entwickeln, die den Zielen deines Unternehmens entsprechen.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
