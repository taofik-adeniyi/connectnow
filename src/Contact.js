import React from "react";
import Layout from "./Layout";
import "./contact.css"

const Contact = () => {
  return (
    <Layout>
      <div className="contact-wrapper">
        <div className="width-of-contact-form">
          <div className="headings">
            <h2>GET IN TOUCH</h2>
          </div>
          <p className="new contact-p">
            Trysail transom furl Sea legs scallywag jack Ketch chandler
            mizzenmast reef sails skysail. Shiver me timbers loot bucko belaying
            pin Sea legs boom gunwalls booty jury mast fore.
          </p>
          <div className="contact-form-wrapper">
            <div>
              <h3>Contact Form</h3>
            </div>
            <div className="name-mail-wrapper">
              <div className="for-name">
              <div className="name-text">Name</div>
              <div>
                <input className="contact-input name-input" type="text" />
              </div>
              </div>
              <div className="email-wrapper">
              <div className="email-text" >Email Address</div>
              <div>
                <input className="contact-input email-input" type="text" />
              </div>
              </div>
            </div>

            <div className="message-wrapper">
              <div className="message-text">Message</div>
              <div>
                <textarea className="contact-input message-input"  type="text" />
              </div>
            </div>

            <div className="message-wrapper" >
              <button>Send</button>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
