import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) {
            setMessage('Please fill in all fields.');
            return;
        }
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            setMessage('Please enter a valid email address.');
            return;
        }
        setMessage(`Thank you for contacting us, ${name}!`);
        setName('');
        setEmail('');
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="submit" value="Submit" className="submit-button" />
                <input type="button" value="Reset" className="reset-button" onClick={handleReset} />
            </form>
            <p className="response-message">{message}</p>
        </section>
    );
};

export default Contact;