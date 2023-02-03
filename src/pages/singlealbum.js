
import axios from "axios";
import {useState,useEffect} from "react";



function SingleAlbum(){
    const [ songs ,setSongs]=useState([]);
    const [ album ,setAlbum]=useState({});
   
    const [loader,setLoader]=useState(false);
  
  const param = window.location.pathname.split("/Album/");

    useEffect(()=>{
      GetAlbum();
    
    },[])

    const GetAlbum = async()=>{
        let album = await axios.get("http://127.0.0.1:5000/album/get/"+param[1]);
        console.log(album.data);
        setAlbum(album.data.data);
        setSongs(album.data.songs);
      }


    return(
        <>
     <div className="single-channel-page" id="content-wrapper">
  <div className="single-channel-image">
    <img className="img-fluid" alt="" src="/img/channel-banner.png" />
    <div className="channel-profile">
      <img className="channel-profile-img" alt="" src={album.image} />
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
       {album.name} {""}
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
       
        {songs.map((data,index) => {
                     return (
                      <div key={index} className="col-xl-4 col-sm-6 mb-3 ">
                      <div className="video-card m-1">
                        <div className="video-card-image">
                          <a className="play-icon" href={"/song/"+data._id}>
                            <i className="fas fa-play-circle" />
                          </a>
                          <a href={"/song/"+data._id}>
                            <img src={data.thumbnail} alt="" />
                          </a>
                          <div className="time">3:50</div>
                        </div>
                        <div className="video-card-body">
                          <div className="video-title">
                            <a href={"/song/"+data._id}>{data.name}</a>
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
    </div>
  </div>
 
</div>

</>
    )
}
export default SingleAlbum;