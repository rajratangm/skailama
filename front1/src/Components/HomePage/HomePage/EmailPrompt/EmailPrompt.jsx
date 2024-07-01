import React, { useState } from 'react';
import axios from 'axios';
import './EmailPrompt.css';

const EmailPrompt = ({ onClose, setLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchMode = () => {
    setIsLogin(prev => !prev);
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email });
      console.log('User logged in:', response.data);
      localStorage.setItem('userEmail', email);
      setLoggedIn(true);
      onClose();
    } catch (error) {
      setError('Invalid credentials. Please try again.');
      console.error('Error logging in:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { name, email, username });
      console.log('User registered:', response.data);
      localStorage.setItem('userEmail', email);
      setLoggedIn(true);
      onClose();
      localStorage.setItem('emailPromptShown', 'true');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('User with this email already exists. Please use a different email.');
      } else {
        setError('Registration failed. Please try again later.');
      }
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="email-prompt-overlay">
      <div className="email-prompt">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{isLogin ? 'Log In' : 'Register'}</h3>
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
            <button type="button" onClick={handleSwitchMode}>Register</button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
            />
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Your username"
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Register</button>
            <button type="button" onClick={handleSwitchMode}>Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailPrompt;
