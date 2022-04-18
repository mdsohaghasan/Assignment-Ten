import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import useFirebase from '../Hooks/useFirebase';
import './Signin.css';

function Signin() {
  // const { signInWithGoogle } = useFirebase();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleEmailBlur = event => {
  //   setEmail(event.target.value);
  // }
  // const handlePasswordBlur = event => {
  //   setPassword(event.target.value);
  // }

  

  return (
    <div>
      <h2>SignIn Now</h2>
      <button 
      // onClick={signInWithGoogle}
       className="googleBtn">Google Singin</button>
      <form>
        <input type="email" placeholder='your email' required /> <br />
        <input type="password" placeholder='your password' required /> <br />
        <input type="submit" value="Submit" />
      </form>
      <p>new to user <Link to="/Register">Register Now</Link></p>
    </div>
  )
}

export default Signin