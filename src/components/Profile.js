import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import "./styles/Profile.css";
import Gallery from "./gallery/Gallery"
import Sidebar from "./sidebar/Sidebar";

function Profile() {
  // const [user, setUser] = useState([]);
  

  // useEffect(() => {
  //   let token = JSON.parse (localStorage.getItem ('user'));
  //   console.log(token);
  //   fetch(`https://instagram-backend-dipu1-app.herokuapp.com/user/${token[0]}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data);
  //       console.log(data);
  //     })
  // },[]);
  // console.log(user);
  const user={
    profile_picture:"../images/anushka-and-virat-profile-pic.webp",
    full_name:"Virat Kohli",
    username:"virat.kohli"
  }
  return (
    <>
    <Sidebar/>
      <div className="profile_main_container">
        <div className="profile_wrapper">
          <div className="profile_picture">
          
          </div>
          <div className="profile_details">
            <div className="user_name_edit_wrapper">
              <div className="user_name">{user?.username}</div>
              <div className="edit_btn_div">
                <button className="edit_btn">Message</button>
              </div>
              <div className="edit_btn_div">
                <button className="edit_btn"><svg aria-label="Following" class="_ab6-" color="#262626" fill="#262626" height="15" role="img" viewBox="0 0 95.28 70.03" width="20"><path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0Zm19-50.8A19 19 0 1 1 64.32 0a19.05 19.05 0 0 1 18.91 19.18ZM14.76 50.01a5 5 0 0 1-3.37-1.31L.81 39.09a2.5 2.5 0 0 1-.16-3.52l3.39-3.7a2.49 2.49 0 0 1 3.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 0 1 3.52 0l3.53 3.58a2.49 2.49 0 0 1 0 3.52L18.23 48.57a5 5 0 0 1-3.47 1.44Z"></path></svg></button>
              </div>
              <div className="edit_btn_div">
                <button className="edit_btn"><svg aria-label="Down Chevron Icon" class="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg></button>
              </div>
              <div className="edit_btn_div">
              <svg aria-label="Options" class="_ab6-" color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div>
            </div>
            <div className="post_follower_wrapper">
              <div className="posts">
                <strong>10</strong> posts
              </div>
              <div className="followers">
                <strong>223M</strong> followers
              </div>
              <div className="following">
                <strong>261</strong> following
              </div>
            </div> 
            <div className="user_full_name_edit_wrapper">
               <div style={{width:"100%"}}><strong>{user.full_name}</strong></div>
               <div style={{width:"100%"}}>Carpediem!</div>
               <div style={{width:"100%", marginLeft:"-3px"}}>
                 <a href="https://one8.com/">one8.com</a>
               </div>
            </div>
          </div>

 
        </div>
        
        <hr style={{marginLeft:"15%", width:"80%"}}/>
        <div className="tablist">
          <div style={{textDecoration:"overline", textDecorationColor:"blue"}}>Post</div>
          <div>Reels</div>
          <div>Videos</div>
        </div>
        <div className="posts_wrapper">
          <Gallery/>
        </div> 
      </div>
    </>
  );
}

export default Profile;
