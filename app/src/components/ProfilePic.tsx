import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/profile-pic.scss';

function ProfilePic() {
  const nextLevelRef = useRef(null);
  const expCircleRef = useRef(null);
  const levelRef = useRef(null);
  
  const calculateExp = () => {
    const start = new Date("March 27, 2019");
    const today = Date.now();
    const todaysDate = new Date(today);
    const thisYear = todaysDate.getFullYear();
    const level =  thisYear - start.getFullYear();
    const nextYear = new Date("March 27, " + (thisYear+1));
    const nextLevel = ( todaysDate < nextYear && thisYear !== nextYear.getFullYear() ) ? nextYear : new Date("March 27, " + (thisYear));
    const diffInTime = nextLevel.getTime() - todaysDate.getTime();
    const toNext = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    const percentage = toNext / 365;
    
    levelRef.current.innerHTML = level;
    nextLevelRef.current.innerHTML = toNext + " XP";
    expCircleRef.current.style.strokeDashoffset = 660 * percentage;

  }

  const currentTheme = useContext(ThemeContext);
  useEffect( () => {
    calculateExp();
  }, []);
  

  return (
    <div className="info d-flex align-items-center col-12 col-md-3 m-0 me-md-5">
      <div className="pfp-container my-5 mb-md-3">
        <div className="img-container d-flex justify-content-center align-items-center mx-auto">
          <div className="level">
            <p ref={levelRef} className="levelValue" />
          </div>
          <div className="exp-container">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="220px" height="220px">
              <defs>
                {
                  (currentTheme.theme === "dark-content") ? (
                    <linearGradient id="gradient-color">
                      <stop offset="0%" stopColor="#DFD9CA" />
                      <stop offset="100%" stopColor="#FCB9B4" />
                    </linearGradient>
                  ) : (
                    <linearGradient id="gradient-color">
                      <stop offset="0%" stopColor="#234f1e" />
                      <stop offset="100%" stopColor="#f5347f" />
                    </linearGradient>
                  )
                }
              </defs>
              <circle ref={expCircleRef} cx="110" cy="110" r="105" strokeLinecap="round" />
            </svg>
          </div>
          <div className="pfp">
            <img src={require("../assets/selfie.png")} alt="Lee Suan Selfie" loading="lazy" />
          </div>
        </div>
        <div className="next-level my-3">
          <p>
            To Next Level:
            <span className="ms-1" ref={nextLevelRef} />
          </p>
        </div>
      </div>
      {/* <Stats /> */}
    </div>
  )
}

export default ProfilePic;