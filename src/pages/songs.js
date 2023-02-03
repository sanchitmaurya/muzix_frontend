import {useState,useEffect} from "react";
import axios from "axios";

function Songs(){

  const [song, setSong] = useState([]);

  useEffect(() => {
    GetSong();
  },[])

  const GetSong = async() =>{
    let artist = await axios.get("http://127.0.0.1:5000/song/all");
    setSong(artist.data.data)
  }


    return(
        <>
          <div className="container-fluid pb-0">
 
 <div className="video-block section-padding">
   <div className="row">
     <div className="col-md-12">
       <div className="main-title">
        
         <h2>Songs</h2>
       </div>
     </div>

     {song.map((data,index) => {
      return(
        <div className="col-xl-3 col-sm-6 mb-3 img-fluid">
        <div className="video-card">
          <div className="video-card-image">
            <a className="play-icon" href={"song/" +data._id}>
              <i className="fas fa-play-circle" />
            </a>
            <a href={"song/" +data._id}>
              <img className="img-fluid" src={data.thumbnail} alt="" />
            </a>
            <div className="time">3:50</div>
          </div>
          <div className="video-card-body">
            <div className="video-title">
              <a href={"song/" +data._id}>{data.name}</a>
            </div>
            <div className="video-page text-success">
              Education{" "}
              <a
                title=""
                data-placement="top"
                data-toggle="tooltip"
                href="#"
                data-original-title="Verified"
              >
                <i className="fas fa-check-circle text-success" />
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
 
</div></>
    )
}
export default Songs;