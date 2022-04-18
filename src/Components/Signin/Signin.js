import React from 'react'
import useFirebase from '../Hooks/useFirebase';
import './Signin.css';

function Signin() {
  const { signInWithGoogle } = useFirebase();

  return (
    <div>
      <h2>SignIn Now</h2>
      <button onClick={signInWithGoogle} className="googleBtn">Google Singin</button>
      <div>
        <input type="email" placeholder='your email' /> <br />
        <input type="password" placeholder='your password' /> <br />
        <input type="submit" value="Submit" />
      </div>
    </div>
  )
}

export default Signin