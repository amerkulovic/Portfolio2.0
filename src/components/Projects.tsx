import Project from "./Project";
import oceanbuddiesImage from "../assets/images/OceanBuddies.png";
import novelnestImage from "../assets/images/NovelNest.png";
import mymoviespaceImage from "../assets/images/mymoviespace3.0.png";
import indianajonesQuizImage from "../assets/images/IndianaJones.png";
import futurefinderImage from "../assets/images/FutureFinder.png";
import weatherdashboardImage from "../assets/images/WeatherDashboard.png";

interface ProjectObject {
  title: string;
  githubLink: string;
  websiteLink: string;
  image: string;
}

const projects: ProjectObject[] = [
  { title: "Ocean Buddies", githubLink: "https://github.com/Oceans-4/Ocean-App", websiteLink: "https://ocean-buddies.herokuapp.com/", image: oceanbuddiesImage },
  { title: "MyMovieSpace", githubLink: "https://github.com/amerkulovic/MyMovieSpace2", websiteLink: "https://my-movie-space-9d82abf6cb80.herokuapp.com/", image: mymoviespaceImage },
  { title: "Novel Nest", githubLink: "https://github.com/amerkulovic/NovelNest", websiteLink: "https://amerkulovic.github.io/NovelNest/", image: novelnestImage },
  { title: "Indiana Jones Quiz", githubLink: "https://github.com/amerkulovic/Indy-Jones-Questionaire", websiteLink: "https://amerkulovic.github.io/Indy-Jones-Questionaire/", image: indianajonesQuizImage },
  { title: "Weather Board", githubLink: "https://github.com/amerkulovic/Weather-Dashboard", websiteLink: "https://amerkulovic.github.io/Weather-Dashboard/", image: weatherdashboardImage },
  { title: "Future Finder", githubLink: "https://github.com/4-non-non-dorks/future-finder", websiteLink: "https://future-finder.herokuapp.com", image: futurefinderImage },
];
const Projects = () => {
  return (
    <div id="projects" className="bg-gradient-to-b from-primary to-background via-background pt-[120px]">
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      <div className="pt-20 pb-40 flex flex-wrap justify-center">
        {projects.map(({ title, githubLink, websiteLink, image }: ProjectObject) => (
          <Project title={title} githubLink={githubLink} websiteLink={websiteLink} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
