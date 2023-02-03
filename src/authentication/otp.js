import { useState } from "react";
import { toast, Toaster} from "react-hot-toast";
import axios from "axios";
import {useNavigate } from 'react-router-dom';

function Otp(){

  const [otp, setOTP] = useState('');    
  const navigate = useNavigate();
 const params = window.location.pathname.split('/otp/');
  
 
 
 const handleVerify = async(e) => {
    e.preventDefault();
  
    


      const user = await axios("http://127.0.0.1:5000/auth/verifyOTP",{
        method:"POST",
        data: {
          otp: otp,
          user_id: params[1]
        },
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json"
        }
      });
      

      if(otp==""){
        toast.error("Please fill otp");
        return false;
      }
     
       if(user.data.status===false){
         toast.error(user.data.msg);
         return false;
      
        }
       //  console.log(user);
        toast.success(user.data.msg);
        localStorage.setItem('access_token', user.data.accessToken);
       navigate('/');
        
   
  
   }

    return(
        <>
          <div className="container-fluid pl-0 pr-0">
  <div className="row no-gutters">
    <div className="col-md-5 mx-auto bg-white full-height">
      <div className="login-main-left">
        <div className="text-center mb-5 login-main-left-header pt-5">
          <img src="/img/email.jpg" className="img-fluid w-25" alt="LOGO" />
          <h5 className="mt-3 mb-3">Verify OTP</h5>
          <p>
            Enter the 6 digit code we sent you via email to continue.
          </p>
        </div>
                 <form method="post" onSubmit={handleVerify}>
            <input
              className="otp w-75 mb-2"
              type="number"
              placeholder="Enter 6 digit OTP"
              onKeyUp={(e) => setOTP(e.target.value)}
            />
            <div>
            <button className="btn btn-primary" type="submit">
                  Verify
            </button>
            </div>
            
          </form>

          <div className="text-center mt-5">
          <p className="light-gray">
           Code expires in 
          </p>
        </div>
        <div className="mt-4">
            <button
              type="submit"
              className="btn btn-outline-primary btn-block btn-lg"
            >
              Verify OTP
            </button>
          </div>

       
      </div>
    </div>
    <Toaster  position="top-right"
  reverseOrder={false}/>
  </div>
</div>



      

        </>
    )
}
export default Otp;