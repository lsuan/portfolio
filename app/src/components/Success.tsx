import React from "react";
import PrevPage from "./PrevPage";

function Success() {
  return (
    <div className="container-xxl">
      <div id="success" className="py-5 px-3 px-md-5">
        <h1 className="mb-3 mt-5 my-sm-5">
          SENT
          <i className="bi bi-check-circle-fill ms-1" />
        </h1>
        <div className="content d-flex justify-content-center align-items-center p-5">
          <p>
            Thank you for contacting me! I'll respond as soon as I can! 🍵
          </p>
          <div className="arrows">
            <PrevPage {...{name:"BACK TO CONTACT"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;