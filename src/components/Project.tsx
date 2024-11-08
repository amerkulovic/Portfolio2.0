import githubLogo from "../assets/images/github-white.png";
import webLogo from "../assets/images/web-white.png";

interface ProjectProps {
  title: string;
  image: string;
  githubLink: string;
  websiteLink: string;
}
const Project = ({ title, image, githubLink, websiteLink }: ProjectProps) => {
  return (
    <div>
      <div className="container inline-block">
        <div className="work-picture">
          <img src={image} alt={title} />
        </div>
        <h1 className="picture-text">{title}</h1>
        <a className="github-text" href={githubLink} target="_blank">
          <img src={githubLogo} width="50" height="50" alt="GitHub" />
        </a>
        <a className="link-text" href={websiteLink} target="_blank">
          <img src={webLogo} width="50" height="50" alt="Website" />
        </a>
      </div>
    </div>
  );
};

export default Project;
