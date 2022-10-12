import React, { useRef } from "react";
import "../styles/modal-contents.scss";
 
function GivsumModalContents() {

  return (
    <div id="givsumCarousel" className="carousel slide carousel-fade d-flex align-items-center w-100">
      <div className="carousel-inner py-3">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#givsumCarousel" data-bs-slide-to="0" className="active bi bi-1-circle" aria-current="true" aria-label="Landing Page Slide"></button>
          <button type="button" data-bs-target="#givsumCarousel" data-bs-slide-to="1" className="bi bi-2-circle" aria-label="About Us Slide"></button>
          <button type="button" data-bs-target="#givsumCarousel" data-bs-slide-to="2" className="bi bi-3-circle" aria-label="Pricing Slide"></button>
          <button type="button" data-bs-target="#givsumCarousel" data-bs-slide-to="3" className="bi bi-4-circle" aria-label="Clubs and Nonprofits Slide"></button>
          <button type="button" data-bs-target="#givsumCarousel" data-bs-slide-to="4" className="bi bi-5-circle" aria-label="Donors and Volunteers Slide"></button>
          <button type="button" data-bs-target="#givsumCarousel" data-bs-slide-to="5" className="bi bi-6-circle" aria-label="Working with Customers Slide"></button>
          <button type="button" data-bs-target="#givsumCarousel" data-bs-slide-to="6" className="bi bi-7-circle" aria-label="User Settings Slide"></button>
        </div>
        <button className="carousel-control-prev w-auto" type="button" data-bs-target="#givsumCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon fa-solid fa-angle-left" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next w-auto" type="button" data-bs-target="#givsumCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon fa-solid fa-angle-right" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-item active">
          <img src={"../assets/givsum-contents/landing-page.gif"} alt="Landing Page" loading="lazy" />
          <div className="carousel-caption">
            <div className="content-title">
              LANDING PAGE
            </div>
            <div className="content-description mt-2">
              Redesigning the Givsum landing pages was one of the first major set of tickets that I was assigned to modernize the platform with a newer look.
              I removed a lot of the front-end code at that time, and rebuilt the overall foundation.
              <br />
              <div className="disclaimer mt-2">
                <i className="bi bi-exclamation-circle-fill mb-2 me-2"/>
                The following slides show only some of the major tasks I did in reworking the site's frontend.
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={"../assets/givsum-contents/about-us.gif"} alt="About Us" loading="lazy" />
          <div className="carousel-caption">
            <div className="content-title">
              ABOUT US
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={"../assets/givsum-contents/pricing.gif"} alt="Pricing" loading="lazy" />
          <div className="carousel-caption">
            <div className="content-title">
              PRICING
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={"../assets/givsum-contents/clubs-nonprofits.gif"} alt="Clubs and Nonprofits" loading="lazy" />
          <div className="carousel-caption">
            <div className="content-title">
              CLUBS &#38; NONPROFITS
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={"../assets/givsum-contents/donors-volunteers.gif"} alt="Donors and Volunteers" loading="lazy" />
          <div className="carousel-caption">
            <div className="content-title">
              DONORS &#38; VOLUNTEERS
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={"../assets/givsum-contents/working-with-customers.gif"} alt="Working with Customer Requests" loading="lazy"/>
          <div className="carousel-caption">
            <div className="content-title">
              WORKING WITH CUSTOMER REQUESTS
            </div>
            <div className="content-description mt-2">
              Another huge chunk of work I was involved in was fulfilling customer requests.
              One of those requests required making custom subdomains for certain organizations and putting their own custom page content, while keeping the look similar to the overall platform.
              I added new routes, controllers, models, and views to the code base.
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={"../assets/givsum-contents/user-settings.gif"} alt="User Settings" loading="lazy"/>
          <div className="carousel-caption">
            <div className="content-title">
              USER SETTINGS
            </div>
          </div>
        </div>
      </div>
      {/* <button className="carousel-control-prev w-auto" type="button" data-bs-target="#givsumCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-arrow-left-short w-auto" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next w-auto" type="button" data-bs-target="#givsumCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-arrow-right-short w-auto" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
}
 
export default GivsumModalContents;

