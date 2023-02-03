
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Albums from './pages/album';
import Artists from './pages/artist';
import Songs from './pages/songs';
import Singlesong from './pages/singlesong';
import SingleAlbum from './pages/singlealbum';
import Singleartist from './pages/singleartist';
import Login from './authentication/login';
import Register from './authentication/register';
import Otp from './authentication/otp';
import Subscription from './authentication/subscription';
import Subscriblist from './pages/subscribelist';

function App() {
  return (<>


    <Header/>
    <Sidebar/>
    <div className="App">
      <div id="wrapper">
        <div id="content-wrapper">
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/albums' element={<Albums/>}/>
            <Route path='/artists' element={<Artists/>}/>
            <Route path='/songs' element={<Songs/>}/>
            <Route path='/Song/:id' element={<Singlesong/>}/>
            <Route path='/Album/:id' element={<SingleAlbum/>}/>
            <Route path='/Artist/:id' element={<Singleartist/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/otp/:id' element={<Otp/>}/>
            <Route path='/subscription' element={<Subscription/>}/>
            <Route path='/subscribelist' element={<Subscriblist/>}/>
          </Routes>
          
          </BrowserRouter>
        </div>
      </div>
    </div>
  </>);
}

export default App;
