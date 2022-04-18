import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../Services/Services'

function Home() {
  return (
    <div>
        <div>home page title</div>
        <div>banner</div>

        <div>
          <h2>service</h2>
          <Services></Services>
          <Link to="/Checkout">Checkout Now</Link>
        </div>
    </div>
  )
}

export default Home