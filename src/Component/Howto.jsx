import React from 'react'
import './Howto.css'
import sha from './Assets/waterlesshampoo.png'

const Howto = () => {
  return (
<>
   <div className="how-main-cont">
     <div className="how-heading">
       <h1>How to Use?</h1>
       <div className="image-cont">
       <img src={sha} alt="" />
       </div>
     </div>
   </div>
</>
    )
}

export default Howto