import React from 'react'
import { Link } from 'react-router-dom'
import logos from "../pic/2.jpg";

function Services() {
  return (
    <div>
      <h3>Services</h3>

      <div class="card" style={{width: "18rem"}}>
   <img src={logos} class="card-img-top" alt="hgfnh"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Checkout" class="btn btn-primary">Checkout Now</Link>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>

  )
}

export default Services