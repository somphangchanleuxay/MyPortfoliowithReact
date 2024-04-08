import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNameBlur = () => {
    if (!name.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name and email are not empty
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Sending email using EmailJS
    emailjs.sendForm('service_001cih8', 'template_x4cgo8j', e.target, 'wXU1oyIwgqiAUEKQD')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        // Reset error messages
        setNameError('');
        setEmailError('');
      }, (error) => {
        console.error('Failed to send email:', error.text);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '50px'}}>
      <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} onBlur={handleNameBlur} placeholder="Your Name" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        {nameError && <p style={{ color: 'red', marginBottom: '10px' }}>{nameError}</p>}
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleEmailBlur} placeholder="Your Email" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        {emailError && <p style={{ color: 'red', marginBottom: '10px' }}>{emailError}</p>}
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Send</button>
      </form>
    </div>
  );
}

export default Contact;