import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          width: "100%",
        //   height: "500px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "30%" }}>
          <div className="headings" style={{ textTransform: "uppercase" }}>
            <h2>Get in touch</h2>
          </div>
          <p className="new" style={{padding: '5px 0 40px 0'}}>
            Trysail transom furl Sea legs scallywag jack Ketch chandler
            mizzenmast reef sails skysail. Shiver me timbers loot bucko belaying
            pin Sea legs boom gunwalls booty jury mast fore.
          </p>
          <div
            style={{
              color: "#ffffff",
              backgroundColor: "#0e1a2b",
              padding: "20px",
            }}
          >
            <div>
              <h3>Contact Form</h3>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px', gap : '30px'}}>
              <div style={{ width: '100%'}}>
              <div style={{marginBottom: '5px'}}>Name</div>
              <div>
                <input className="contact-input" type="text" style={{boxSizing: 'border-box', width: '100%', height: '28px'}} />
              </div>
              </div>
              <div style={{ width: '100%'}}>
              <div style={{marginBottom: '5px'}}>Email Address</div>
              <div>
                <input className="contact-input" type="text" style={{boxSizing: 'border-box', width: '100%', height: '28px'}}/>
              </div>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div style={{marginBottom: '5px'}}>Message</div>
              <div>
                <textarea className="contact-input" style={{width: '380px', height: '60px'}} type="text" />{" "}
              </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}}>
              <button>Send</button>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
