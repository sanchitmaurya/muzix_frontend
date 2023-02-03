import { useReducer, useState } from "react";
import { toast, Toaster} from "react-hot-toast";
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginAsync } from "../reducers";


function Login(){

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate();
  const distpatch = useDispatch();


  const submitHandle = async(e) => {
    e.preventDefault();

   
  

     var user = await distpatch(loginAsync({email,password}));
    //  console.log(user);
     if(user.status==false){
      return toast.error(user.msg);
     }
     toast.success(user.msg);

     if(user.status==true){
      toast.success(user.msg);
      console.log(user);
      navigate('/otp/'+user.user._id); 
      
     }
   
  
 
  }
  
  
 


    return(
        <>
        <div className="container-fluid pl-0 pr-0">
  <div className="row no-gutters">
    <div className="col-md-5 mx-auto bg-white full-height">
      <div className="login-main-left">
        <div className="text-center mb-5 login-main-left-header pt-4">
          <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
          <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
          <p>
            It is a long established fact that a reader <br /> will be
            distracted by the readable.
          </p>
        </div>
        <form method="post" onSubmit={submitHandle}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              onKeyUp={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onKeyUp={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <div className="row">
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-block btn-lg"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="text-center mt-5">
          <p className="light-gray">
            Don’t have an account? <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
   
  </div>
</div>
<div>
    <Toaster  position="top-right"
  reverseOrder={false}/>
  </div>
</>
    )
}
export default Login;