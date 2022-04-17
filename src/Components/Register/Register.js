import React from 'react'

function Register() {
  return (
    <div>
      <h2>Register Now</h2>
      <div>
           <input type="text" placeholder='your name'/> <br/>
           <input type="email" placeholder='your email'/> <br/>
           <input type="password" placeholder='your password'/> <br/>
           <input type="submit" value="Submit"/> 
      </div>
    </div>
  )
}

export default Register