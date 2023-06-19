import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { selectUsers } from "../../store/slices/users/usersSlice";
const Profile = () => {
  const { currentUser } = useSelector(selectUsers);

  return (
    <>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img src={currentUser?.avatar} alt="" />
            </div>
            <div className="profile-user-settings">
              <h1 className="profile-user-name">{currentUser?.username}</h1>
              <button className="btn profile-edit-btn">Edit Profile</button>

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
              <br />
              <br />
            </div>
            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">
                    {currentUser?.posts.length}
                  </span>{" "}
                  posts
                </li>
                <li>
                  <span className="profile-stat-count">
                    {currentUser?.followers}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span className="profile-stat-count">
                    {currentUser?.following}
                  </span>{" "}
                  following
                </li>
              </ul>
              <br />
              <br />
            </div>
            <div className="profile-bio">
              <h1>{currentUser?.name}</h1>
              <p>{currentUser?.bio}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="gallery">
          {currentUser?.posts.map((elm) => (
            <div key={elm.id} className="gallery-item">
              <img src={elm.img} className="gallery-image" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span>Likes</span> {elm.likesCount}
                  </li>
                  <li className="gallery-item-comments">
                    <span>Comments</span> {elm.comments.length}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
