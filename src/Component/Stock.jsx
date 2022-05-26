import React,{useState} from 'react'
import './Stock.css'

const Stock = () => {
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
    <div className="stock-main-cont">
    <div className="stock-img-cont">
      <img src="https://img.freepik.com/free-vector/couple-professionals-analyzing-graphs_74855-4393.jpg?t=st=1653567685~exp=1653568285~hmac=19b8fbfa93db7136c4c5f4f7f4df63b548858b714346a13cbb3aed6a93b29391&w=1060" alt="" />
      </div>
      <h1>Investor Relation</h1>
    <h3>Together we can do more</h3>
    <h5>(Content of Investor relation)</h5>
    <h2>Distribution opportunity</h2>
    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}  /><br/>
    <input type="text" placeholder='Phone no' onChange={(e) => setPhoneno(e.target.value)}  /><br/>
    <input type="text" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)}  /><br/>
    <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}  /><br/>
    <button>Submit</button>


    </div>
    </>
  )
}

export default Stock