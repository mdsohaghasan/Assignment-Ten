import React from 'react'
import { Link } from 'react-router-dom'
import photo from "../../img/0.jpg";

function Services(props) {
  const { name, ratting, feedback} = props;
  // console.log(props)

  return (
    <div>
      <h3>Services</h3>
      <div class="card" style={{width: "18rem"}}>
   <img src={photo} class="card-img-top" alt="hgfnh"/>
  <div class="card-body">
    <h5 class="card-title">Name : {name}</h5>
    <h5 class="card-title">ratting : {ratting}</h5>
    <p class="card-text">ratting : {feedback}</p>
    <Link to="/Checkout" class="btn btn-primary">Checkout Now</Link>
  </div>
</div>
    </div>

  )
}

export default Services