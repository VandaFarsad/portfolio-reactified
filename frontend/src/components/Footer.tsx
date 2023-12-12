import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XingIcon from "./XingIcon";

const Footer = () => {
  return (
    <footer className="container mx-auto flex px-10 py-4 flex-col items-center">
      <div className="col-md-12">
        <div className="mt-8 text-2xl">
          <span className="m-4">
            <a href="https://github.com/VandaFarsad" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </span>
          <span className="m-4">
            <a href="https://www.linkedin.com/in/vanda-farsad-4b98321a5/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </span>
          <span className="m-4">
            <a href="https://www.xing.com/profile/Vanda_Farsad" target="_blank" rel="noopener noreferrer">
              <XingIcon />
            </a>
          </span>
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy; Dr. Vanda Farsad</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
