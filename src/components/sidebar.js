function Sidebar(){
    return(
        <>
        <ul className="sidebar navbar-nav">
  <li className="nav-item active">
    <a className="nav-link" href="/">
      <i className="fas fa-fw fa-home" />
      <span>Home</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/artists">
      <i className="fas fa-fw fa-users" />
      <span>Artists</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/albums">
      <i className="fas fa-fw fa-users" />
      <span>Albums</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/songs">
      <i className="fas fa-fw fa-users" />
      <span>Songs</span>
    </a>
  </li>
  {/* <li className="nav-item">
    <a className="nav-link" href="/login">
      <i className="fas fa-fw fa-users" />
      <span>Login</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/register">
      <i className="fas fa-fw fa-users" />
      <span>Register</span>
    </a>
  </li> */}
 
  <li className="nav-item channel-sidebar-list">
    <h6>SUBSCRIPTIONS</h6>
    <ul>
      <li>
        <a href="subscriptions.html">
          <img className="img-fluid" alt="" src="/img/s1.png" /> Your Life
        </a>
      </li>
      <li>
        <a href="subscriptions.html">
          <img className="img-fluid" alt="" src="/img/s2.png" /> Unboxing{" "}
          <span className="badge badge-warning">2</span>
        </a>
      </li>
      <li>
        <a href="subscriptions.html">
          <img className="img-fluid" alt="" src="/img/s3.png" /> Product /
          Service
        </a>
      </li>
      <li>
        <a href="subscriptions.html">
          <img className="img-fluid" alt="" src="/img/s4.png" /> Gaming
        </a>
      </li>
    </ul>
  </li>
</ul>
</>
    )
}
export default Sidebar;