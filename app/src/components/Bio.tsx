import React from "react";
import '../styles/bio.scss';
import Stats from "./Stats";
import UCISVG from "./UCISVG";
 
function Bio() {
  const likes = [
    "great + fun company",
    "helpful teammates",
    "dancing",
    "producing great results",
  ]
  const loves = [
    "KPOP",
    "spending hours playing video games",
    "matcha !",
    "sleeping",
  ]
  const misc = [
    "ISFP",
    "Filipino"
  ]
  return (
    <div id="bio" className="p-md-3 py-3">
      <div className="title">
        DETAILS
      </div>
      <div className="content d-flex justify-content-around p-4 py-md-0 px-md-3">
        <div className="left-col pe-3">
          <div className="education">
            <div className="title">
              EDUCATION
            </div>
            <div className="education-content d-flex align-items-center pt-2">
              {/* <div className="img-container me-2">
                <img className="university-logo" alt="UCI Logo"/>
              </div> */}
              <UCISVG />
              <div className="education-info ps-3 ps-sm-2">
                <strong>University of California, Irvine</strong>
                <br />
                2015-2019
                <br />
                B.S. in Computer Science
              </div>
            </div>
          </div>
          <hr className="divider w-100" />
          <Stats />
        </div>
        <hr className="divider responsive-divider d-none w-100" />
        <div className="right-col notes ps-3">
          <div className="likes d-flex flex-column">
            <div className="title mb-1">
              LIKES
            </div>
            {
              likes.map( (like, index) =>
                <div key={index} className="text d-flex align-items-baseline">
                  <i className="bi bi-hand-thumbs-up-fill me-2" />
                  {like}
                </div>
              )
            }
          </div>
          <hr className="divider w-100" />
          <div className="loves d-flex flex-column">
            <div className="title mb-1">
              LOVES
              
            </div>
            {
              loves.map( (love, index) =>
                <div key={index} className="text d-flex align-items-baseline">
                  <i className="bi bi-heart-fill me-2" />
                  {love}
                </div>
              )
            }
          </div>
          <hr className="divider w-100" />
          <div className="misc d-flex flex-column">
            <div className="title mb-1">
              MISC
            </div>
            {
              misc.map( (note, index) =>
                <div key={index} className="text d-flex align-items-baseline">
                  <i className="bi bi-stickies-fill me-2" />
                  {note}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Bio;

