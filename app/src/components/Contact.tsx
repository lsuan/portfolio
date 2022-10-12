import React, { useState } from 'react';
import "../styles/contact.scss";
import PrevPage from './PrevPage';
 
function Contact() {
  interface FormPost {
    firstname?: string,
    lastname?: string,
    message?: string
  }

  const [state, setState] = useState<FormPost>();

  const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event.target);
    console.log(encode({ "form-name": "contact", ...state }));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state })
    })
      .then(() => console.log("Success!"))
      .catch(error => console.log(error));
    event.preventDefault();
  }
  
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(state);
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div id="contact" className="py-5 px-3 px-md-5">
      <h1 className="mb-3 mt-5 my-sm-5">
        CONTACT ME
      </h1>
      <div className="content w-100 d-flex flex-column flex-md-row justify-content-around align-items-center m-auto mb-5 py-4">
        <div className="contact-text col-12 col-md-4">
          REACH OUT TO ME VIA
          <div className="contact-icons d-flex justify-content-around align-items-center mx-auto pt-2">
            <a href="https://www.linkedin.com/in/lsuan/" rel="noreferrer" target="_blank">
              <i className="bi bi-linkedin" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="LinkedIn" />
            </a>
            <a href="mailto:leesuan97@gmail.com">
              <i className="bi bi-envelope-fill" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Email" />
            </a>
          </div>
          <div className="or-text pt-4">
            OR
          </div>
          <div className="form-ref d-flex justify-content-center md-justify-content-evenly align-items-center">
            <div className="pe-3">
              FILL OUT THIS FORM!
            </div>
            <i className="d-none d-md-block bi bi-arrow-right"></i>
            <i className="d-block d-md-none bi bi-arrow-down"></i>
          </div>
        </div>
        <div className="contact-form p-3 card col-12 col-md-6">
          <form id="contact-form" name="contact" className="d-flex d-flex flex-column justify-content-between" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} action="success">
            <input name="bot-field" className="d-none" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="inputs">
              <div className="form-floating mb-3">
                <input type="text" name="name" className="form-control" id="name" placeholder="First Last" required={true} onChange={handleChange}/>
                <label htmlFor="name">NAME</label>
            </div>
              <div className="form-floating mb-3">
                <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" required={true} onChange={handleChange}/>
                <label htmlFor="email">EMAIL</label>
              </div>
              <div className="form-floating mb-2">
                <textarea id="message" name="message" className="form-control w-100" rows={5} placeholder="Leave a message." required={true} onChange={(e) => handleChange(e)}/>
                <label htmlFor="message">MESSAGE</label>
              </div>
            </div>
            <button type="submit" className="btn">SEND</button>
          </form>
        </div>
      </div>
      <div className="arrows d-flex justify-content-between align-items-center mt-3">
        <PrevPage {...{name:"TO PROJECTS"}} />
      </div>
    </div>
  );
}
 
export default Contact;

