// Signin.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './Firebase';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Signin successful!'); 
    } catch (error) {
      setError(error.message);
      setSuccessMessage(''); 

    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setSuccessMessage('Signin successful!'); // Set success message
    } catch (error) {
      setError(error.message);
      setSuccessMessage(''); 
    }
  };

  return (
    <div>
      <h2>Sign in</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Sign in</button>
      <button onClick={handleGoogleSignin}>Sign in with Google</button>
      <br/>
      {successMessage}
    </div>
  );
};

export default Signin;
