import { useEffect, useState } from "react";
import axios from "axios";

function Albums(){

  const [album,setAlbum] = useState([]);

  useEffect(() => {
    GetAlbum();
  },[])

  const GetAlbum = async() => {
    let album = await axios.get(" http://127.0.0.1:5000/Album/all");
    setAlbum(album.data.data)
  }
    return(
        <>
       <div className="container-fluid pb-0">
  <div className="video-block section-padding">
    <div className="row">
      <div className="col-md-12">
        <div className="main-title">
          
          <h2>Albums</h2>
        </div>
      </div>

      {album.map((data,index) => {
        return(
          <div className="col-xl-3 col-sm-6 mb-3" key={index}>
                    <div className="category-item mt-0 mb-0">                   
                        <a href={"Album/"+data._id}>
                          <img className="img-fluid" src={data.image} alt="" />
                        </a>
                       <h6>{data.name}</h6>
                       <p>{data.year}</p>
                       <p>74,583 view</p>
                      </div>                    
                    </div>
        )
      })}
      
    
      
    </div>
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center pagination-sm mb-4">
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
export default Albums;