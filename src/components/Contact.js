import React from "react";
import contact from "../../images/contact.png";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-us">
      <div className="contact-us-image">
        <img src={contact}></img>
      </div>
      <div className="contact-us-form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea
            placeholder="Type your message here ..."
            required
          ></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting FoodVilla, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
