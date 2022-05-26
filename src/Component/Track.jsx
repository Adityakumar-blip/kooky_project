import React,{useState} from 'react'
import './Track.css'

const Track = () => {
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  return (
    <>
    <div className="track-main-cont">
      <div className="track-img-cont">
      <img src="https://img.freepik.com/free-vector/checking-delivery-service-app-mobile-phone_32996-664.jpg?w=1060" alt="" />
      </div>
      <div className="track-text-cont">
      <h3>TRACK YOUR ORDER</h3>
      <h4>We are here to help you</h4>
      <h1 className='track-brand'>KooKY</h1>
      <p>Track status of your shipment search by:</p>
      <input type="text" placeholder='Enter Email Id' onChange={(e) => setEmail(e.target.value)}  /><br/>
      <input type="text" placeholder='Enter Mobile No' onChange={(e) => setMobileno(e.target.value)}  /><br/>
      <button>Submit</button>
      <p>Email:</p>
      <p>Call us on:</p>
      <h5>Refund policy</h5>
      </div>
    </div>
    </>
  )
}

export default Track