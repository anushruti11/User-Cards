import { React, useState } from "react";

const Users = ({ loading, users }) => {
  const [showCard, setShowCard] = useState(false);
  const [data, setData] = useState("");
  const handleData = (user) => {
    let newData = {
      title: user.name.title,
      first: user.name.first,
      last: user.name.last,
      streetnumber: user.location.street.number,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      streetname: user.location.street.name,
      offset: user.location.timezone.offset,
      description: user.location.timezone.description,
      gender: user.gender,
      postcode: user.location.postcode,
      picture: user.picture.medium,
    };
    setData(newData);
    setShowCard(true);
  };
  return loading ? (
    <div id="main">
      <img
        src="https://i.gifer.com/ZZ5H.gif"
        alt="Loading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main">
      <div className="project-column4">
        {showCard && (
          <div className="main-column4">
            <div className="details">
              <div className="profile-pic">
                <img src={data.picture} alt="profile" />
              </div>
              <div className="text">
                <div className="details-names">
                  <p className="details-name">{data.title}</p>&nbsp;
                  <p className="details-name">{data.first}</p>&nbsp;
                  <p className="details-name">{data.last}</p>
                </div>
                <div className="locations">
                  <p className="location">{data.streetnumber}, </p>
                  &nbsp;
                  <p className="location">{data.streetname}, </p> &nbsp;
                  <p className="location">{data.city}, </p> &nbsp;
                  <p className="location">{data.state}, </p> &nbsp;
                  <p className="location">{data.country}, </p> &nbsp;
                  <p className="location">{data.postcode}</p>
                </div>
                <div className="timezones">
                  <p className="timezone">{data.offset} - </p>
                  &nbsp;
                  <p className="timezone">{data.description}</p>
                </div>
                <div className="details-gender">
                  <p className="gender">{data.gender}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {users.map((user) => (
          <div className="profile-column4" onClick={() => handleData(user)}>
            <div className="profile">
              <div className="profile-gender">
                <p className="gender">{user.gender} .</p> &nbsp;
                <p className="nat">{user.nat}</p>
              </div>
              <div className="names">
                <p className="name">{user.name.title}</p>&nbsp;
                <p className="name">{user.name.first}</p>&nbsp;
                <p className="name">{user.name.last}</p>
              </div>
              <p className="email">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
