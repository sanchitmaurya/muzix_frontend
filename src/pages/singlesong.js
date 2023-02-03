import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import getauth from "../services/auth";

function Singlesong(){

  const [song, setSong] = useState([]);
  const [limit, setLimit] = useState(8);
  const [loader, setLoader] = useState(false);
  const [nextsongs, setNextSongs] = useState([]);
  const [isactiveplan, setisactiveplan] = useState(false);
  const navigate = useNavigate();

  const param = window.location.pathname.split("/song/");

  useEffect(() => {
    GetSong();
    NextSongs();

  }, [limit])

  const GetSong = async() => {
    setLoader(true);

    let artist = await axios.get("http://127.0.0.1:5000/song/get/" +param[1]);
    setSong(artist.data.data)
    setLoader(false);
  }

    const NextSongs = async() => {
      let song = await axios.get("http://127.0.0.1:5000/song/nextlist/" +param[1]+"?limit=" +limit);
      setNextSongs(song.data.data)
      setLoader(false);
    }


    const moreHandle = (e) => {
      setLoader(true);
      setLimit(limit+e);
    }

    const CurrentPlan = async() => {
      try{
        axios.defaults.headers.common['Authorization'] = `Bearer ${getauth().token}`
        let plan = await axios.get('http://127.0.0.1:5000/plans/userplan');
        if(plan.data.data.plan_id._id){
          setisactiveplan(true);
        }
      }
      catch(err){
        console.log(err);
      }
    }
  
    return(
        <>
        <div className="container-fluid pb-0">
  <div className="video-block section-padding">
    <div className="row">
      <div className="col-md-8">
        <div className="single-video-left">
          <div className="single-video">
            <iframe
              width="100%"
              height={450}
              src={song.filename}
              frameBorder={0}
              allow="autoplay; encrypted-media"
              allowFullScreen=""
            />
          </div>
          <div className="single-video-title box mb-3">
            <h2>
              <a href="#">
                {song.name}
              </a>
            </h2>
            <p className="mb-0">
              <i className="fas fa-eye" /> 2,729,347 views
            </p>
          </div>
          <div className="single-video-author box mb-3">
            <div className="float-right">
              <button className="btn btn-danger" type="button">
                Subscribe <strong>1.4M</strong>
              </button>{" "}
              <button className="btn btn btn-outline-danger" type="button">
                <i className="fas fa-bell" />
              </button>
            </div>
            <img className="img-fluid" src="/img/s4.png" alt="" />
            <p>
              <a href="#">
                <strong>Osahan Channel</strong>
              </a>{" "}
              <span
                title=""
                data-placement="top"
                data-bs-toggle="tooltip"
                data-original-title="Verified"
              >
                <i className="fas fa-check-circle text-success" />
              </span>
            </p>
            <small>Published on Aug 10, 2020</small>
          </div>
          <div className="single-video-info-content box mb-3">
            <h6>Cast:</h6>
            <p>Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher</p>
            <h6>Category :</h6>
            <p>Gaming , PS4 Exclusive , Gameplay , 1080p</p>
            <h6>About :</h6>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved overVarious versions have evolved over the years,
              sometimes{" "}
            </p>
            <h6>Tags :</h6>
            <p className="tags mb-0">
              <span>
                <a href="#">Uncharted 4</a>
              </span>
              <span>
                <a href="#">Playstation 4</a>
              </span>
              <span>
                <a href="#">Gameplay</a>
              </span>
              <span>
                <a href="#">1080P</a>
              </span>
              <span>
                <a href="#">ps4Share</a>
              </span>
              <span>
                <a href="#">+ 6</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="single-video-right">
          <div className="row">
            <div className="col-md-12">
              
              <div className="main-title mb-3">
                
                <h5>Up Next</h5>
              </div>
            </div>
            <div className="col-md-12">
              {nextsongs.map((song,index) => {
                return(
                  <div className="video-card video-card-list">
                  <div className="video-card-image">
                    <a className="play-icon" href={"/song/" +song._id}>
                      <i className="fas fa-play-circle" />
                    </a>
                    <a href={"/song/" +song._id}>
                      <img className="img-fluid" src={song.thumbnail} alt="" />
                    </a>
                    <div className="time">3:50</div>
                  </div>
                  <div className="video-card-body">
                    <div className="btn-group float-right right-action">
                      <a
                        href="#"
                        className="right-action-link text-gray"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
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
                    <div className="video-title">
                      <a href={"/song/" +song._id}>{song.name}</a>
                    </div>
                    <div className="video-page text-success">
                      Education{" "}
                      <a
                        title=""
                        data-placement="top"
                        data-bs-toggle="tooltip"
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
                )
              })}
             
             
             <button className="btn text-dark border border-dark w-100" type="button"
              onClick={(e) => moreHandle(5)} > View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    )
}
export default Singlesong;