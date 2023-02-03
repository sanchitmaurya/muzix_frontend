
import axios from "axios";
import {useState,useEffect} from "react";



function Singleartist(){
    const [ artist ,setArtist]=useState({});
    const [ albums ,setAlbum]=useState([]);
   
    const [loader,setLoader]=useState(false);
  
  const param = window.location.pathname.split("/Artist/");

    useEffect(()=>{
      GetArtist();
    
    },[])

    const GetArtist = async()=>{
        let album = await axios.get("http://127.0.0.1:5000/artist/get/"+param[1]);
        setArtist(album.data.data);
        setAlbum(album.data.albums);
      }


    return(
        <>
     <div className="single-channel-page" id="content-wrapper">
  <div className="single-channel-image">
    <img className="img-fluid" alt="" src="/img/channel-banner.png" />
    <div className="channel-profile">
      <img className="channel-profile-img" alt="" src={artist.image} />
      <div className="social hidden-xs">
        Social &nbsp;
        <a className="fb" href="#">
          Facebook
        </a>
        <a className="tw" href="#">
          Twitter
        </a>
        <a className="gp" href="#">
          Google
        </a>
      </div>
    </div>
  </div>
  <div className="single-channel-nav p-2 px-5">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="channel-brand" href="#">
       {artist.name} {""}
        <span
          title=""
          data-placement="top"
          data-toggle="tooltip"
          data-original-title="Verified"
        >
          <i className="fas fa-check-circle text-success" />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
     
    </nav>
  </div>
  <div className="container-fluid">
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <div className="btn-group float-right right-action">
              <a
                href="#"
                className="right-action-link text-gray"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by <i className="fa fa-caret-down" aria-hidden="true" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">
                  <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-fw fa-times-circle" /> &nbsp; Close
                </a>
              </div>
            </div>
            <h6>All Album</h6>
          </div>
        </div>
        {albums.map((data,index) => {
                     return (
                      <div key={index} className="col-xl-4 col-sm-6 mb-3">
                      <div className="video-card row align-items-center">
                        <div className="video-card-image col-3">
                          <a className="play-icon" href={"/Album/"+data._id}>
                            <i className="fas fa-play-circle" />
                          </a>
                          <a href={"/Album/"+data._id}>
                            <img className="img-fluid rounded-pill" src={data.image} alt="" />
                          </a>
                          <div className="time">3:50</div>
                        </div>
                        <div className="video-card-body col-9">
                          <div className="video-title">
                            <a href={"/Album/"+data._id}>{data.name}</a>
                          </div>
                          <div className="video-page text-success">
                            Songs{" "}
                            <a
                              title=""
                              data-placement="top"
                              data-toggle="tooltip"
                              href="#"
                              data-original-title="Verified"
                            >
                              <i className=" text-success" >0</i>
                            </a>
                          </div>
                          <div className="video-view">
                            1.8M views &nbsp;
                            <i className="fas fa-calendar-alt" /> 11 Months ago
                          </div>
                        </div>
                      </div>
                    </div>
                     )
        })}
       
      
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center pagination-sm mb-0">
          <li className="page-item disabled">
            <a tabIndex={-1} href="#" className="page-link">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a href="#" className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
 
</div>

</>
    )
}
export default Singleartist;