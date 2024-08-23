import React from "react";
const Users = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  const createdDate = new Date(created_at);
  return (
    <div>
      <div className="users">
        <div className="images">
          <img src={avatar_url} alt="avatar_url" />
        </div>
        <div className="name-container">
          <a href={`https://api.github.com/users/${login}`}></a>
          <p>
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
        <div className="profile-info">
          <div>
            <h1>{`Name : ${login}`}</h1>
          </div>
          <div>{`Followers: ${followers}`}</div>
          <div>{`Following: ${following}`}</div>

          <div>{`Repos: ${public_repos}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Users;
