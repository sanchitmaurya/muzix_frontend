import { toast, Toaster} from "react-hot-toast";
import axios from "axios";
import { useEffect,useState } from "react";
import config from "../config/razorpay";
import getauth from '../services/auth';
function Subscription(){


  const[plans, setPlans] = useState([]);
  const[userplan, setUserPlan] = useState([]);
  useEffect(() => {
    GetPlans();
    CurrentPlan();
  }, [])


  const GetPlans = async() => {

    let plan = await axios.get("http://127.0.0.1:5000/plans/all");
    setPlans(plan.data.data);

  }
  const CurrentPlan = async() => {

    try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getauth().token}` 
   let plan= await axios.get('http://127.0.0.1:5000/plans/userplan');
 
   setUserPlan(plan.data.data.plan_id._id);
    }
    catch(err) {
    //console.log(err)
    }
    console.log(userplan)
  }
  const handlePayment = async (planid) => {
    
    let plan = await axios.get("http://127.0.0.1:5000/plans/get/"+planid);
 
   
    const amount= plan.data.data.amount;
    var options = config(amount,planid);
     console.log(options);
     axios.defaults.headers.common['Authorization'] = `Bearer ${getauth().token}` 
    axios.post('http://127.0.0.1:5000/create_transaction',{amount: amount*100})
    .then(res=>{
      options.order_id = res.data.id;
      options.amount = res.data.amount;
      console.log(options)
      var razorpay= new window.Razorpay(options);
      razorpay.open();
      
    })
    .catch(e=>console.log(e))


  }

    return(
        <>
         <div className="container-fluid mb-5 mt-5">
         <div className="pricing card-deck flex-column flex-md-row mb-3">

          {plans.map((data,index) => {
            return(
              <div key={index} className="card card-pricing text-center px-3 mb-4">
              <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">
                {data.name}
              </span>
              <div className="bg-transparent card-header pt-4 border-0">
                <h1
                  className="h1 font-weight-normal text-primary text-center mb-0"
                  data-pricing-value={15}
                > 
                  $<span className="price">{data.amount}</span>
                  <span className="h6 text-muted ml-2">/ per month</span>
                </h1>
              </div>
              <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                  <li>Up to 5 users</li>
                  <li>Basic support</li>
                  <li>Monthly updates</li>
                  <li>Free cancelation</li>
                </ul>
                {userplan && data._id == userplan ? <button type="button"  className="btn btn-primary mb-3 hvr">
                  Active Plan
                  </button> : <button type="button" onClick={(e) => handlePayment(data._id)} className="btn btn-outline-secondary mb-3 hvr">
                  Order now
                </button> }
                
              </div>
            </div>
            )
          })}

 
</div>

         </div>
         </>
    )
}
export default Subscription;