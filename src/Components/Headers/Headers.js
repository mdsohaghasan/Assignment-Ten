import React from 'react'
import './Headers.css';
import { Link } from 'react-router-dom'
// import useFirebase from '../Hooks/useFirebase';

function Headers() {
  // const { user } = useFirebase();
  return (
    <div className='Headers'>
      <Link to="/">Home</Link>
      {/* {user.uid ? <button></button> : */}
        < Link to="/Signin">Signin</Link>
      {/* } */}
      <Link to="/Register">Register</Link>
      <Link to="/Services">Service</Link>
      <Link to="/Blogs">Blog</Link>
      <Link to="/About">About</Link>
    </div >
  )
}

export default Headers