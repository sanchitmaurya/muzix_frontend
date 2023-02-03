import axios from 'axios';
import {useState,} from 'react';
import {Toaster, toast} from 'react-hot-toast';
 import{ useNavigate} from 'react-router-dom';
 import { useDispatch } from "react-redux";
 import { registerAsync } from "../reducers";


function Register(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
   const Navigate= useNavigate();
   const distpatch = useDispatch();

  // useEffect = () => ({

  // })

  const submitHandle = async(e) => {
    e.preventDefault();


    var user = await distpatch(registerAsync({email,password,mobile,name}));

     if(user.status==false){
      return toast.error(user.msg);
     }
     toast.success(user.msg);

     if(user.status==true){
      toast.success(user.msg);
      console.log(user);
      Navigate('/login'); 
      
     }
         
    
  }

    return(
        <>
        <div className="container-fluid pl-0 pr-0">
  <div className="row no-gutters">
    <div className="col-md-5 mx-auto bg-white full-height">
      <div className="login-main-left">
        <div className="text-center p-4 login-main-left-header pt-4">
          <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
          <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
          <p>
            It is a long established fact that a reader <br /> will be
            distracted by the readable.
          </p>
        </div>
        <form method='post' onSubmit={submitHandle}>
        <div className="form-group">
            <label>full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              onKeyUp={(e) => setName(e.target.value)}
            />
          </div>
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
            <label>Mobile number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter mobile number"
              onKeyUp={(e) => setMobile(e.target.value)}
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
            <button
              type="submit"
              className="btn btn-outline-primary btn-block btn-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center mt-5">
          <p className="light-gray">
            Already have an Account? <a href="/login">Sign In</a>
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
export default Register;