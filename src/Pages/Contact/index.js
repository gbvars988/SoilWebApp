import React from "react";
import "./contact.css";
import EmailPhoto from "../../Assets/email.jpg";
import PhonePhoto from "../../Assets/phone.jpg";

function Contact() {
  return (
    <div>
      <div className="contact-bg">
        <div className="contact-container">
          <h1>Contact</h1>
          <p>
            If you have any questions or would like to get in touch, please
            don't hesitate to contact us using our details below.
          </p>
          <div className="contact-img-container">
            <div className="contact-item">
              <img src={EmailPhoto} alt="email" />
              <h2>Email</h2>
              <p> support@soil.com </p>
            </div>
            <div className="contact-item">
              <img src={PhonePhoto} alt="phone" />
              <h2>Phone</h2>
              <p> +61 412-345-678 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
