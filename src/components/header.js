import getauth from '../services/auth';
import { useEffect } from 'react';
import axios from 'axios';


function Header(){

  const user= getauth().loggedin;
  useEffect(()=>{
// console.log();
    getUser();
  })

  const getUser = async() => {
    try{
      axios.defaults.headers.common['Authorization'] = `Bearer ${getauth().token}` 
      var user = await axios.get('http://127.0.0.1:5000/currentUser');
      console.log(user.data);
    }
    catch(err){
        if(err.response.data.status==false){
          handleLogout();
        }
    }
  }


  const handleLogout =() =>{
     localStorage.removeItem('access_token');
     window.location.reload();
     alert('do you want to logout')
  }

    return(
        <>
        <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
  &nbsp;&nbsp;
  <button
    className="btn btn-link btn-sm text-secondary order-1 order-sm-0"
    id="sidebarToggle"
  >
    <i className="fas fa-bars" />
  </button>{" "}
  &nbsp;&nbsp;
  <a className="navbar-brand mr-1" href="index.html">
    <img className="img-fluid" alt="" src="/img/logo.png" />
  </a>
  <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..." />
      <div className="input-group-append">
        <button className="btn btn-light" type="button">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  </form>
  <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
  <li className="nav-item mx-1">
      <a className="nav-link" href="/subscription">
        <i className="fas fa-credit-card fa-fw" />
        Subscribe
      </a>
    </li>
    <li className="nav-item mx-1">
      <a className="nav-link" href="upload.html">
        <i className="fas fa-plus-circle fa-fw" />
        Upload Video
      </a>
    </li>
    {(user== false)?<>
      <li className="nav-item">
      <a href="/login" className="nav-link btn btn-sm btn-primary rounded-pill px-4">
        <i className="fas fa-sign-in-alt fa-fw " /> Login 
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/register">
        <i className="fas fa-user-plus fa-fw mx-2" />
        Register
      </a>
    </li>
    </> :<><li className="nav-item dropdown no-arrow osahan-right-navbar-user">
  <a
    className="nav-link dropdown-toggle user-dropdown-link"
    href="#"
    id="userDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <img alt="Avatar" src="/img/user.png" />
    Osahan
  </a>
  <div
    className="dropdown-menu dropdown-menu-right"
    aria-labelledby="userDropdown"
  >
    <a className="dropdown-item" href="/subscribelist">
      <i className="fas fa-fw fa-user-circle" /> &nbsp; User History
    </a>
    <a className="dropdown-item" href="/subscription">
      <i className="fas fa-fw fa-video" /> &nbsp; Subscriptions
    </a>
    <a className="dropdown-item" href="settings.html">
      <i className="fas fa-fw fa-cog" /> &nbsp; Settings
    </a>
    <div className="dropdown-divider" />
    <a 
      className="dropdown-item"
      href="#"
      data-bs-toggle="modal"
     onClick={handleLogout}
    >
      <i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Logout
    </a>
  </div>
</li>
</>}

   
  </ul>
</nav>
</>
    )
}
export default Header;