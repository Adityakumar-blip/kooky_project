import React from 'react'
import './Product.css'
import shampoo from './Assets/waterlesshampoo.png'

const Product = () => {
  return (
    <div className='product-cont'>
      <div className="product-heading">
        <h1>KOOKY PRODUCTS</h1>
      </div>
      <div className="first-row row">
          <div className="column-1 col">
             <div className="product-1">
               <img src={shampoo} alt="" />
             </div>
          </div>
          <div className="column-2 col">

          </div>
      </div>
    </div>
  )
}

export default Product