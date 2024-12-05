import React from 'react';
import './Contact.css';  // Import a CSS file for styling

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-description">Feel free to reach out through any of the following channels. I'm always open to connecting!</p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <h2>Phone Number</h2>
                    <p>📞 <a href="tel:+621234567890">+62 (123) 456-7890</a></p>
                </div>
                
                <div className="contact-item">
                    <h2>Email</h2>
                    <p>✉️ <a href="mailto:example@example.com">example@example.com</a></p>
                </div>

                <div className="contact-item">
                    <h2>Social Media</h2>
                    <p>
                        <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                        <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                        <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a> |
                        <a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer">Youtube</a> |
                        <a href="https://linkedin.com/example" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
