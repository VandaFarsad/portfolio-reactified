import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-10 py-4 flex flex-col items-center">
      <div className="flex space-x-4 mt-8 items-center">
        <a href="https://github.com/VandaFarsad" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" height={30} />
        </a>
        <a href="https://www.linkedin.com/in/vanda-farsad-4b98321a5/" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" height={30} />
        </a>
        <a href="https://www.xing.com/profile/Vanda_Farsad" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:xing" height={30} />
        </a>
        <a href="mailto:contact@initial-commit.com">
          <Icon icon="mdi:email" height={30} />
        </a>
      </div>

      <div className="py-4 text-center">
        <small>Copyright &copy; Dr. Vanda Farsad</small>
      </div>
    </footer>
  );
};

export default Footer;
