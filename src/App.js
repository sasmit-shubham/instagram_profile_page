import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import {Routes, Route} from "react-router-dom"
import Home from './components/home/Home';
import Search from './components/search/Search';
import Explore from './components/explore/Explore';
import Messanger from './components/messanger/Messanger';
import Notifications from './components/notifications/Notifications';
import NewPost from './components/newPost/NewPost';

function App() {
  return (
      <div className="App">
        <Routes>
         <Route path="/" element={<Profile/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/search" element={<Search/>}/>
         <Route path="/explore" element={<Explore/>}/>
         <Route path="/messanger" element={<Messanger/>}/>
         <Route path="/notfications" element={<Notifications/>}/>
         <Route path="/newPost" element={<NewPost/>}/>
         
        </Routes>
      </div>
  );
}

export default App;
