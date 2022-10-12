import React from "react";
import { Link } from "react-router-dom";
import "../styles/page-arrows.scss";
 
function PrevPage(page: {name:string}){
  const arrowText = page.name.split(" ");
  const linkName = arrowText[arrowText.length-1].toLowerCase();
  return (
    <div className="prev-page d-flex justify-content-start align-items-center">
      <hr className="stop-bar"></hr>
      {
        (linkName === "home") ? (
          <Link to="/" className="d-flex align-items-center btn p-0">
            <i className="ms-1 fa-solid fa-caret-left"></i>
            {page.name}
          </Link>
        ) : (
          <Link to={`/${linkName}`} className="d-flex align-items-center btn p-0">
            <i className="ms-1 fa-solid fa-caret-left"></i>
            {page.name}
          </Link>
        )
      }
    </div>
  );
}
 
export default PrevPage;

