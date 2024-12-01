import photo from "../assets/images/photo.jpg";
const About = () => {
  return (
    <div
      className="flex align-middle pt-40 pb-60 bg-gradient-to-b from-background to-primary via-background 
"
    >
      <div className="relative">
        <p className="font-bold text-6xl pt-28 px-10">
          Hi, my name is <span className="type-writer">Amer Kulovic</span>
          <br></br>Software Engineer
        </p>
        <p className="font-extralight px-10 text-lg pt-2">Check out my work!</p>
      </div>
      <div className="blob-container ml-10">
        <img src={photo} alt="Centered Image" className="blob-image" />
      </div>
    </div>
  );
};

export default About;
