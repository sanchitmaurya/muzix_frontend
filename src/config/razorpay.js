import axios from "axios";
import getauth from '../services/auth';
function config(amount,plan_id) {
    var options = {
        "key": "rzp_test_GGVNU0KNcoXLQW",
        "amount": amount*100, // 2000 paise = INR 20, amount in paise
        "name": "Merchant Name",
        'order_id':"order1111",
        "handler": function(response) {
            console.log(response);
            var values ={
                razorpay_signature : response.razorpay_signature,
                razorpay_order_id : response.razorpay_order_id,
                transactionid : response.razorpay_payment_id,
                transactionamount : amount,
                planid: plan_id
              }
              axios.defaults.headers.common['Authorization'] = `Bearer ${getauth().token}` 
            axios.post('http://127.0.0.1:5000/payment_transaction',values)
            .then(res=>{ console.log(res)})
            .catch(e=>console.log(e))
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      }
      return options
}

export default config;