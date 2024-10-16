import { Fade } from "react-awesome-reveal";
import dpd1 from "../assets/images/dpd1.jpg";
import dpd2 from "../assets/images/dpd2.jpg";
import dpd3 from "../assets/images/dpd3.jpg";

const About = () => {
  const textBackgroundStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div className="container marketing">
      <h1 id="About">About Me</h1>

      {/* START THE FEATURETTES */}
      <hr className="featurette-divider" />

      <Fade delay={1000} cascade damping={0.5} triggerOnce>
        <div className="row featurette">
          <div className="col-md-7">
            <div style={textBackgroundStyle}>
              <h2 className="featurette-heading fw-normal lh-1">
                Welcome to Ivan's Digital Portfolio!
              </h2>
              <p className="lead">
                I am a fourth-year student studying Software Design with Artificial Intelligence for Cloud Computing at the Technological University of the Shannon: Midlands Midwest (TUS).
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img src={dpd1} alt="Profile" className="img-fluid" />
          </div>
        </div>
      </Fade>

      <hr className="featurette-divider" />

      <Fade delay={1000} cascade damping={0.1} triggerOnce>
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <div style={textBackgroundStyle}>
              <h2 className="featurette-heading fw-normal lh-1">
                Placement Experience{" "}
                <span className="text-body-secondary">9-month Internship at DPD Ireland</span>
              </h2>
              <p className="lead">
                I worked as a Software Developer Intern at DPD Ireland, Athlone from January 2024 to September 2024. During this time, I participated in daily standups and wrote project reports. Key projects included:
              </p>
              {/* Move the <ul> outside of <p> */}
              <ul>
                <li><b>Collections API:</b> Applied software testing techniques to create automated tests with 100% coverage using Postman API.</li>
                <li><b>Authorize API:</b> Migrated code from Spring MVC to Spring Boot for API endpoints.</li>
                <li>Experience in testing, debugging, and working with SQL and NoSQL databases.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={dpd2} alt="Placement" className="img-fluid" />
          </div>
        </div>
      </Fade>

      <hr className="featurette-divider" />

      <Fade delay={1000} cascade damping={0.1} triggerOnce>
        <div className="row featurette">
          <div className="col-md-7">
            <div style={textBackgroundStyle}>
              <h2 className="featurette-heading fw-normal lh-1">
                My Vision{" "}
                <span className="text-body-secondary">Why I Chose Programming</span>
              </h2>
              <p className="lead">
                I chose programming because it is challenging, collaborative, and innovative. My vision is to contribute to the future by making technology simpler, allowing people to focus on what truly matters in life.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img src={dpd3} alt="Vision" className="img-fluid" />
          </div>
        </div>
      </Fade>

      <hr className="featurette-divider" />
    </div>
  );
};

export default About;
