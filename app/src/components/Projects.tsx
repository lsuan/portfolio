import React from "react";
import "../styles/projects.scss";
// import NextPage from './NextPage';
import PrevPage from "./PrevPage";
import ProjectModal from "./ProjectModal";

function Projects() {
  const projects = [
    {
      id: "givsum",
      title: "GIVSUM, INC.",
      type: "professional",
      liveLink: "https://www.givsum.com/",
      githubLink: "",
      imageUrl: require("../assets/givsum-thumbnail.png"),
      position: "Full Stack Software Engineer",
      time: "Sep 2019 — Aug 2022",
      description:
        "Givsum is a startup that handles organizations and charity events. I worked as a full stack developer, but delved more on front end redesigns. Improving and modernizing the website's look and implementing better UI/UX by bringing designs to life were vital tasks of the job. In addition, I also changed functionality on the backend and added data migrations to the database.",
      tech: [
        "Ruby on Rails",
        "HTML",
        "JavaScript",
        "JQuery",
        "CSS",
        "Bootstrap",
        "PostgreSQL",
      ],
    },
    {
      id: "linkup",
      title: "LINKUP",
      type: "personal",
      liveLink: "",
      githubLink: "https://github.com/lsuan/link-up",
      imageUrl: require("../assets/linkup-thumbnail.png"),
      position: "Full Stack Software Engineer + Project Manager",
      time: "Oct 2022 — Present",
      description:
        "LinkUp is a scheduling web app that aims to solve the problem of scheduling events with multiple people at once. It incorporates user admin functionality with creating and publishing events, and includes third party calendar app integrations for easy personal time management. Check out the repo for more details on the development process!",
      tech: [
        "T3 Stack",
        "Next.js",
        "TypeScript",
        "React",
        "Prisma",
        "Tailwind CSS",
        "TRPC",
        "MySQL",
        "Figma",
        "Miro",
      ],
    },
    {
      id: "tic-tac-toe",
      title: "TIC TAC TOE (TO1)",
      type: "personal",
      liveLink: "https://tictac-to1.netlify.app/",
      githubLink: "https://github.com/lsuan/tic-tac-toe",
      imageUrl: require("../assets/tic-tac-toe-thumbnail.png"),
      position: "",
      time: "October 2022 — October 2022",
      description:
        "This is a recreation of the classic game Tic Tac Toe. Instead of using X's and O's, it uses character images on the board, which comes from the members of the Kpop group TO1. It replicates a simple game structure with a start screen, character select screen, game screen, and results screen with options to play again or quit.",
      tech: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      id: "this",
      title: "THIS WEBSITE",
      type: "personal",
      liveLink: "",
      githubLink: "https://github.com/lsuan/my-website",
      imageUrl: require("../assets/website-thumbnail.png"),
      position: "",
      time: "Oct 2022 — Present",
      description:
        "This was my first attempt of incorporating TypeScript into a web project, learning more about its syntax and usage. Furthermore, I dug deeper into my creative side and implemented a clean UI while keeping the site accessible and easy-to-use. I also explored more React components such as Contexts for dark/light mode implementation and CSS Animations for extra pizzazz.",
      tech: ["React", "TypeScript", "JavaScript", "Bootstrap"],
    },
    {
      id: "hagglit",
      title: "HAGGLIT",
      type: "personal",
      liveLink: "",
      githubLink: "https://github.com/lsuan/hagglit",
      imageUrl: require("../assets/hagglit-thumbnail.png"),
      position: "",
      time: "Sep 2022 — Present",
      description:
        "This is a private Discord bot that I made for my server of close KPOP fandom friends. I had to learn how to create a Discord application and use Discord API to create custom commands. Furthermore, I used Google Sheets API to store and manipulate information to a spreadsheet that acted like a relational database, and Twitter API to return tweet metrics.",
      tech: ["Python", "APIs"],
    },
  ];

  return (
    <div className="container-xxl">
      <div id="projects" className="p-3 pt-5 p-sm-5">
        <h1 className="mb-3 mt-5 my-md-5">WORK + PROJECTS</h1>
        <div className="projects-container d-flex flex-column align-items-center mx-auto my-md-3">
          {projects.map((project, index) => (
            <div key={project.title} className="project w-100 mt-3 mt-md-5">
              <ProjectModal {...project} />
              <div
                className={`project-content d-flex flex-column flex-md-row align-items-stretch justify-content-center ${
                  index % 2 === 0 ? "flex-md-row-reverse" : "flex-md-row"
                }`}
              >
                <div className="project-media mx-md-4 mx-lg-5 my-5 my-md-0">
                  <div className="project-img-container mx-auto">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} Thumbnail`}
                      loading="lazy"
                    />
                    <div
                      className={`project-type ${
                        index % 2 === 0 ? "left" : "right"
                      }`}
                    >
                      {project.type}
                    </div>
                    <div
                      className={`project-links d-flex justify-content-center gap-2 ${
                        index % 2 === 0 ? "left" : "right"
                      }`}
                    >
                      {project.liveLink !== "" && (
                        <a
                          href={project.liveLink}
                          className="btn d-flex justify-content-center align-content-center"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <i className="bi bi-arrow-up-right-square-fill me-1" />
                          LIVE
                        </a>
                      )}
                      {project.githubLink !== "" && (
                        <a
                          href={project.githubLink}
                          className="btn d-flex justify-content-center align-content-center"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <i className="bi bi-github me-1" />
                          REPO
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-tech pt-4 mt-md-4">
                    <div className="tech-title w-100">TECH USED</div>
                    <div className="tags d-inline-flex flex-wrap py-2">
                      {project.tech.map((name) => {
                        return (
                          <div
                            key={name}
                            className="tag px-2"
                            data-bs-toggle="tooltip"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-placement="top"
                            data-bs-title={name}
                          >
                            {name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="card project-info">
                  <div
                    className={`project-title ${
                      index % 2 !== 0 ? "left" : "right"
                    }`}
                  >
                    {project.title}
                  </div>
                  {project.position === "" ? (
                    <div className="subtitle mb-2">{project.time}</div>
                  ) : (
                    <div className="subtitle mb-2">
                      {project.position}
                      <br />
                      {project.time}
                    </div>
                  )}
                  <div className="project-description mb-3">
                    {project.description}
                  </div>
                  <div className="project-see-more">
                    {project.id === "this" || project.id === "linkup" ? (
                      // <button type="button" className="btn d-flex">
                      //   <i className="bi bi-question-circle-fill me-1" />
                      //   SECRET
                      // </button>
                      <div />
                    ) : (
                      <button
                        type="button"
                        className="btn d-flex mx-0"
                        data-bs-toggle="modal"
                        data-bs-target={`#${project.id}-modal`}
                      >
                        <i className="bi bi-stickies-fill me-1" />
                        MORE DETAILS
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows d-flex justify-content-between align-items-center mt-3">
          <PrevPage {...{ name: "TO HOME" }} />
          {/* <NextPage {...{name: "HIRE ME"}} /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
