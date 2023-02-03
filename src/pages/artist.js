import axios from "axios";
import {useState, useEffect} from "react";

function Artists(){

  const[artist, setArtist] = useState([]);

  useEffect(() => {
    GetArtists();
  }, [])


  const GetArtists = async() => {

    let artist = await axios.get(" http://127.0.0.1:5000/Artist/all");
    setArtist(artist.data.data);
  }
    return(
        <>
        <div className="container-fluid">
  <div className="video-block section-padding">
    <div className="row">
      <div className="col-md-12">
        <div className="main-title">
         
          <h2>Artists</h2>
        </div>
      </div>

      {artist.map((data,index) => {
        return(
          <div className="col-xl-3 col-sm-6 mb-3" key={index}>
                <div className="channels-card">
                  <div className="channels-card-image">
                    <a href={"Artist/"+data._id}>
                      <img className="img-fluid" src={data.image}  alt="" />
                    </a>
                    <div className="channels-card-image-btn">
                      <button type="button" className="btn btn-outline-danger btn-sm">
                        Subscribe <strong>1.4M</strong>
                      </button>
                    </div>
                  </div>
                  <div className="channels-card-body">
                    <div className="channels-title">
                      <a href={"Artist/"+data._id}>{data.name}</a>
                    </div>
                    <div className="channels-view">382,323 subscribers</div>
                  </div>
                </div>
              </div>
        )
      })}
     
      
    
    </div>
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center pagination-sm mb-0">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1}>
            Previous
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</>
    )
}
export default Artists;