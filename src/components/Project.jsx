function Project() {
  return (
    <section className="project">
      <span className="project-heading">My projects</span>
      <div className="project1">
        <div className="left1">
          <div className="l1-title">
            <span>pcpartfinder</span>
          </div>
          <div className="l1-content">
            <p>
              A web app that scrapes information from Indian pc component stores
              and displays them to the user.It can also give price drop alerts
              to users. (ongoing)
            </p>
          </div>
          <div className="l1-tech-stack">
            <span> React, Node.js, PostgreSQL</span>
          </div>
          <div className="l1-button">
            <div className="website">
              <a
                href="https://pcpartfinder.vercel.app/search"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div className="source code">
              <a
                href="https://github.com/1Gokul/pcpartfinder"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="right1">
          <img src="imag1.jpg" alt="ss"></img>
        </div>
      </div>
    </section>
  );
}
export default Project;
