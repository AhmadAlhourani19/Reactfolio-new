import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import emailjs from '@emailjs/browser';
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/contact.css";
import Reveal from "../components/Reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  const form = useRef();

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setIsEmailFocused(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (username.trim() === '' || email.trim() === '' || message.trim() === '') {
      setIsValid(false);
      return;
    }

    emailjs
      .sendForm('service_wlq2kc4', 'template_mpw7x3f', form.current, {
        publicKey: 'd-sp6-7MqaNFZctdN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

    setIsValid(true);
    console.log('Form Submitted: ', { username, email, message });
    setLoading(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Helmet>
        <title>Contact | Ahmad Alhourani</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <Reveal>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="contact-container"
            >
              {emailSent && (
                <div className="popup">
                  <p>Email sent successfully!</p>
                  <button onClick={() => setEmailSent(false)}>Close</button>
                </div>
              )}
              <div className="Text-container">
                <div className="title contact-title">
                  Let's Get in Touch: Ways to Connect with Me
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="subtitle contact-subtitle"
                >
                  Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions.
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="subtitle contact-subtitle"
                >
                  If you have a specific question or comment, please feel free to email me directly at&nbsp;
                  <a className="email-color" href={`mailto:${INFO.main.email}`}>
                    {INFO.main.email}
                  </a>
                  . I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods.
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="subtitle contact-subtitle"
                >
                  Alternatively, you can use the contact form on my website to get in touch. Simply fill out the required fields, and I'll get back to you as soon as possible.
                </motion.div>
              </div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="form-container"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <form ref= {form} onSubmit={sendEmail} className="contact-form" style={{ width: "90%", maxWidth: "600px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="form-group"
                >
                  <input type="text" id="name" required value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label htmlFor="name"><FontAwesomeIcon  icon={faUser}/> Name</label>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="form-group"
                >
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                  />
                  <label
                    htmlFor="email"
                    className={isEmailFocused || email ? "focused" : ""}
                  >
                    <FontAwesomeIcon  icon={faEnvelope}/> Email
                  </label>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="form-group"
                >
                  <textarea id="message" rows="8" required value={message} onChange={(e) => setMessage(e.target.value)} />
                  <label for="message"><FontAwesomeIcon  icon={faComments }/> Message</label>
                </motion.div>
                {!isValid && (
                  <motion.p style={{ color: "red", textAlign: "center" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Please fill out all fields
                  </motion.p>
                )}
                <motion.button
                  type="submit"
                  disabled={loading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  {loading ? 'Sending...' : 'Send'} <FontAwesomeIcon  icon={faPaperPlane}/>
                </motion.button>
              </form>
            </motion.div>
            </motion.div>
          </Reveal>
          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
