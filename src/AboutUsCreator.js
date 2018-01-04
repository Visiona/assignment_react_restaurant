import React from 'react'
import restImg from './restaurant.jpg';


const AboutUsCreator = () => {

  return (
    <div className="jumbotron blueish" id='1'>
      <h1>XXL DINERS BISTRO</h1>
      <h2>Big Portions for Big Boys</h2>
      <p>Eat a lot, eat healthy at affordable price. There is no such place anywhere else. Come and enjoy! We have short history as its an innovative solution you can try and after have the unique talking story with your friends. Experience new. Experience BIG. </p>
      <img src={restImg} className="img-responsive center-block size-main-img" alt="Restaurant Interior" />
    </div>
  )
}

export default AboutUsCreator
