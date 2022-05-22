import React from "react";
import "../styles/Contact.css";
import "../styles/Form.css";

function Contact() {
  // return (
  //   <div className="contact">
  //     <div className="leftSide"></div>

  //   </div>
  // );
  return (
    <div className="form-container">
      <div className="form-content-left">
        <div className="rightSide">
          <h1 style={{textAlign:"center"}}> Contact Us</h1>
          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit"> Send Message</button>
          </form>
        </div>
      </div>
      <div className="form-content-right"></div>
    </div>
  );
}

export default Contact;
