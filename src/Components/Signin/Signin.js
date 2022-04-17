import React from 'react'
import './Signin.css';

function Signin() {
  return (
    <div>
      <h2>SignIn Now</h2>
      <button className="googleBtn">Google Singin</button>
      <div>
           <input type="email" placeholder='your email'/> <br/>
           <input type="password" placeholder='your password'/> <br/>
           <input type="submit" value="Submit"/> 
      </div>
    </div>
  )
}

export default Signin