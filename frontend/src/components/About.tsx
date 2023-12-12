import photo from "../assets/foto.jpg";

const About = () => {
  return (
    <section id="about" className="w-full h-screen font-sans bg-slate-500 flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <img className="rounded-2xl shadow-sm shadow-slate-400 max-w-xs mr-4" src={photo} alt="portrait" />
        <article className="p-6 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-slate-300">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Hey!</h2>
          <p>
            Mein Name ist Vanda. Ich bin promovierter Mathematiker und erfahrener Python-Entwickler. Gerne helfe ich dir
            bei der Konzeption, Erstellung und Optimierung deiner Webanwendung.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
