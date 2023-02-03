import axios from "axios";
import { useState,useEffect } from "react";
import getauth from "../services/auth";
function Subscribelist(){

    const [list, setList]=useState([]);

    useEffect(() =>{
      getList()
    },[])

    const getList= async() => {

      axios.defaults.headers.common['Authorization']=`Bearer ${getauth().token}`

        let list = await axios.get("http://127.0.0.1:5000/list/all");
        setList(list.data.data);
    }
    console.log(list);

return(

    <>
        <div className="container-fluid mb-5 mt-5 table-light table-hover table-striped ">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Transaction ID</th>
      <th scope="col">Order Amount</th>
      <th scope="col">Plan Type</th>
      <th scope="col">Exprired</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    {list.map((data,index) =>{
      return(
        <tr>
      <th scope="row">{data.order_id}</th>
      <td>{data.payment_method}</td>
      <td>{data.transactionid}</td>
      <td>{data.amount}</td>
      <td>{data.plan_type}</td>
      <td>{data.expired_at}</td>
      <td>{data.status}</td>
    </tr>
      )
    })}
    
  </tbody>
</table>
</div>
    </>
)

}
export default Subscribelist;