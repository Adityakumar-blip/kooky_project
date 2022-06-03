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
    <h2>Distribution opportunity</h2>
    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}  /><br/>
    <input type="text" placeholder='Phone no' onChange={(e) => setPhoneno(e.target.value)}  /><br/>
    <input type="text" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)}  /><br/>
    <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}  /><br/>
    <button>Submit</button>
    </div>

    <div className="relation">
    <h1>Investor Relation</h1>
    <h3>Together we can do more!</h3>
    <h5>We are a growing company who's mission is to upgrade the lifestyle of people with perfectly affordable solutions!
We will create a wide interesting product range on a regular basis, which meets people's needs in an interesting manner!

In near future we are planning to bring out our wide range of innovative, yet practically affordable products, on which, currently, our R&D team is working. We have upon us, a constant guidance, of some industrial and institutional mentors, and a hardworking as well as aresponsive team.<br/><br/>

Our latest product (Water-less Shampoo) has a large market size in India and abroad, amongst which many segments are still ideally untouched. Hence, we plan to cover those untouched, as well as other segments.
Our former product (Tulsi Extract based gel Sanitizer) is already performing good in the local market, and similarly our next product will also take the advantage of this existing market base, hence making it clear, that we will capture more and more market base with all our products.

This calculation helps us assure you, that working in alliance, we can develop thoroughly!<br/><br/>

Moreover, we are a responsible, enthusiastic, innovative, realistic and flexible organization that believes in growing together.

We hereby voice, that we are open to have active and passive investors invest with us.
We assure to disscus our business data quarterly with our investors. We also believe that the investors are an important part of the company's system, and hence we plan to include them in the planning of our future strategies with confidence of all board of directors and investors.
Adding to all the above, we are also open to offer directorship to our investors.

We aspire to grow together, and raise to new heights of success everyday! Let us proceed towards betterment, with each other's support!</h5>
    </div>
    </>
  )
}

export default Stock