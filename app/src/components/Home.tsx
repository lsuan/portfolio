import React from "react";
import Profile from "./Profile";
import "../styles/home.scss";
import Contact from "./Contact";

function Home() {
  return (
    <div className="container-xxl">
      <div
        className="initial-screen d-flex flex-column justify-content-center align-items-center"
        id="home"
      >
        <div className="title mb-4">
          <h1 className="px-5">LEE SUAN</h1>
          <h2 className="px-5">SOFTWARE ENGINEER</h2>
        </div>
        <div className="description mb-4">
          <p>
            I am a <strong>front end focused engineer</strong> with a background
            on full stack development. I love making <strong>aesthetic</strong>,{" "}
            <strong>clean</strong>, and <strong> functional </strong>{" "}
            interfaces, while ensuring a smooth user experience. I also love
            collaborating with creative designers and implementing their visions
            into real life code.
          </p>
        </div>
        <div className="links d-flex justify-content-around align-items-center">
          <a href="https://github.com/lsuan" rel="noreferrer" target="_blank">
            <i
              className="bi bi-github"
              data-bs-toggle="tooltip"
              data-bs-custom-class="custom-tooltip"
              data-bs-placement="top"
              data-bs-title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/lsuan/"
            rel="noreferrer"
            target="_blank"
          >
            <i
              className="bi bi-linkedin"
              data-bs-toggle="tooltip"
              data-bs-custom-class="custom-tooltip"
              data-bs-placement="top"
              data-bs-title="LinkedIn"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1JhxKJq0sgQa5JEAfD9xuzROVXgBfLQJn/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <i
              className="bi bi-file-earmark-person"
              data-bs-toggle="tooltip"
              data-bs-custom-class="custom-tooltip"
              data-bs-placement="top"
              data-bs-title="Resume"
            />
          </a>
        </div>
        <div className="arrows">
          <div className="down-section d-flex flex-column align-items-center">
            <a
              className="continue d-flex flex-column align-items-center"
              href="#profile"
            >
              START
              <i className="fa-solid fa-caret-down"></i>
            </a>
            <hr className="stop-bar"></hr>
          </div>
        </div>
      </div>

      <Profile />
      <Contact />
    </div>
  );
}

export default Home;
