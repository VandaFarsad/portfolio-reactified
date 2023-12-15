const Footer = () => {
  return (
    <footer className="container mx-auto px-10 py-4 flex flex-col items-center">
      <div className="flex space-x-4 mt-8 items-center">
        <a href="https://github.com/VandaFarsad" target="_blank" rel="noopener noreferrer">
          <span className={"lg:h-7 lg:w-7 h-5 w-5 icon-[mdi--github]"}></span>
        </a>
        <a href="https://www.linkedin.com/in/vanda-farsad-4b98321a5/" target="_blank" rel="noopener noreferrer">
          <span className={"lg:h-7 lg:w-7 h-5 w-5 icon-[mdi--linkedin]"}></span>
        </a>
        <a href="https://www.xing.com/profile/Vanda_Farsad" target="_blank" rel="noopener noreferrer">
          <span className={"lg:h-7 lg:w-7 h-5 w-5 icon-[mdi--xing]"}></span>
        </a>
        <a href="mailto:contact@initial-commit.com">
          <span className={"lg:h-7 lg:w-7 h-5 w-5 icon-[mdi--email]"}></span>
        </a>
      </div>

      <div className="py-4 text-center">
        <small>Copyright &copy; Dr. Vanda Farsad</small>
      </div>
    </footer>
  );
};

export default Footer;
