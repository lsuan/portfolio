import React, { useEffect, useRef } from 'react';
import "../styles/nav.scss";
import "../styles/profile.scss";
import Skills from './Skills';
import ProfilePic from './ProfilePic';
import { Link } from 'react-router-dom';
import Bio from './Bio';
 
function Profile() {
  const hash = window.location.hash;
  const profileRef = useRef(null);
  
  useEffect( () => {
    if (hash === "#profile") {
      profileRef.current.scrollIntoView({behavior: "auto"});
    }
  }, [hash]);
  
  return (
    <div ref={profileRef} id="profile" className="py-5 px-3 px-sm-5 mb-md-0">
      <h1 className="mb-3 mt-5 my-sm-5">PROFILE</h1>
      <div className="content d-flex justify-content-center align-items-center m-auto flex-md-row flex-column mb-5">
        <ProfilePic />
        <div className="col card p-md-3 ms-md-3 ms-lg-4 mb-4 mb-md-0 w-100">
          <ul className="nav nav-tabs d-flex" id="profile-tabs" role="tablist">
            <li className="nav-item me-2">
              <button className="nav-link active me-2 mb-2 mb-sm-0 d-flex justify-content-center" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills-tab-pane" type="button" role="tab" aria-controls="skills-tab-pane" aria-selected="true">
                <i className="bi bi-laptop-fill" />
                <div className="title d-none d-sm-block">
                  SKILLS
                </div>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link d-flex justify-content-center" id="bio-tab" data-bs-toggle="tab" data-bs-target="#bio-tab-pane" type="button" role="tab" aria-controls="stats-tab-pane" aria-selected="true">
                <i className="bi bi-person-circle" />
                <div className="title d-none d-sm-block">
                  BIO
                </div>
              </button>
            </li>
          </ul>
          <div className="card-body tab-content p-0" id="profile-tabContent">
            <div className="tab-pane fade show h-100 active" id="skills-tab-pane" role="tabpanel" aria-labelledby="skills-tab">
              <Skills />
            </div>
            <div className="tab-pane fade" id="bio-tab-pane" role="tabpanel" aria-labelledby="bio-tab">
              <Bio />
            </div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <div className="down-section d-flex justify-content-center">
          <a className="continue d-flex flex-column align-items-center" href="#contact-section">
            HIRE ME
            <i className="fa-solid fa-caret-down"></i>
          </a>
          <hr className="stop-bar"></hr>
        </div>
        <div className="next-page d-flex justify-content-end align-items-center mt-3">
          <Link to="/projects" className="btn d-flex justify-content-end align-items-center">
            TO PROJECTS
            <i className="ms-1 fa-solid fa-caret-right"></i>
          </Link>
          <hr className="stop-bar"></hr>
        </div>
      </div>
      </div>
  );
}
 
export default Profile;

