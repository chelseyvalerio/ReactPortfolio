import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
      setErrorMessage(''); 
    }
      else if (name === 'name') {
        setName(value);
      }
      else if (name === 'message') {
        setMessage(value);
      }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('please fill in email');
    
      return;    
    }

    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: cvalerio@csog.net</li>
        <li><a href="https://github.com/chelseyvalerio" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/chelsey-valerio-a331b1163/" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
      <p>Wnat to Connect? Send me a Message below and I look forward to getting to know you! </p>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="first and last name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="Message here"
        />
        <button type="submit" className="submit" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;