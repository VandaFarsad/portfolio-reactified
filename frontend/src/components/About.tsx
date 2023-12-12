const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-700">
      <div className="container mx-auto flex flex-col items-center">
        <div className="block lg:max-w-xl max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Hey!</h5>
          <p className="font-sans text-gray-70">
            Mein Name ist Vanda. Ich bin promovierter Mathematiker und erfahrener Python-Entwickler. Gerne helfe ich dir
            bei der Konzeption, Erstellung und Optimierung deiner Webanwendung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
