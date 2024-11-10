import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = ({ t }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    // Basic validation
    if (!name) formErrors.name = "Name is required";
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }
    if (!message) formErrors.message = "Message is required";

    if (Object.keys(formErrors).length === 0) {
      // Handle successful form submission
      console.log("Form submitted:", { name, email, message });
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="modalContent">
      <div className="modalHeader">
        <h2>{t.contact}</h2>
        <h4>{t.contactHover}</h4>
      </div>
      <div className="modalMainContent">
        <div className="formBox">
          <form onSubmit={handleSubmit} className="contactForm">
            <div className="formBoxHeader">
              <div className="labelInput">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="required"
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="required"
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className="labelInput">
                <label htmlFor="name">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="optional"
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
            </div>
            <div className="formBoxMessage">
              <div className="labelInput">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="13"
                  required
                  placeholder="required"
                ></textarea>
                {errors.message && <p>{errors.message}</p>}
              </div>
            </div>
            <button type="submit">Send Message</button>

            <div className="formBoxHeader">
              <a href="https://github.com/ClassenMartin" target="_blank">
                <GitHubIcon style={{fontSize: '40px', color:'black'}}/>
              </a>
              <a href="https://www.instagram.com/classenmartin/" target="_blank">
                <InstagramIcon style={{fontSize: '40px', color:'black'}}/>
              </a>
              <a href="https://www.linkedin.com/in/martin-classen-776a492b8/" target="_blank">
                <LinkedInIcon style={{fontSize: '40px', color:'black'}}/>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
