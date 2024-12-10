import React from 'react';
import './Contact.css'; // Import a CSS file for styling

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-description">
                Feel free to reach out through any of the following channels. I'm always open to connecting!
            </p>
            
            <div className="contact-info">
                {/* Phone Number */}
                <div className="contact-item">
                    <h2>Phone Number</h2>
                    <p>
                        📞 <a href="tel:+6282111302034" className="contact-link">+62 821 1130 2034</a>
                    </p>
                </div>
                
                {/* Email */}
                <div className="contact-item">
                    <h2>Email</h2>
                    <p>
                        ✉️ <a href="mailto:dennisdwi18@gmail.com" className="contact-link">dennisdwi18@gmail.com</a>
                    </p>
                </div>

                {/* Social Media */}
                <div className="contact-item">
                    <h2>Social Media</h2>
                    <p>
                        <a href="https://github.com/DennisDwiMusti" target="_blank" rel="noopener noreferrer" className="contact-link">Github</a> | 
                        <a href="https://www.instagram.com/dennisdwimusti/" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a> | 
                        <a href="https://www.youtube.com/@Dennis_Dwi" target="_blank" rel="noopener noreferrer" className="contact-link">YouTube</a> | 
                        <a href="https://www.linkedin.com/in/dennis-dwi-musti" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
