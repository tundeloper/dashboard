import React from "react";
import { useParams } from "react-router-dom";
import "./profile.scss";

const rows = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    UserName: "Anderson123",
    FirstName: "Williams",
    LastName: "Anderson",
    Email: "williams@gmail.com",
    Number: "080123456789",
    Status: "Verified",
  },

];

const ProfileDetails = () => {
  const { userId } = useParams();
  const user = rows.find((user) => user.UserName === userId);

  if (!userId || !user) {
    return <div>User not found</div>;
  }


  return (
    <div className="ProfileDetailsScreen">
      <div className="ProfileDetailsContainer">
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={user.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{user.UserName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.Email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.Number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">First name</span>
                  <span className="itemValue">{user.FirstName}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last name</span>
                  <span className="itemValue">{user.LastName}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          right
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
         
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
