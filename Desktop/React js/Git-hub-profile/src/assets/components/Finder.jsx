import React from "react";
import { useState } from "react";
import Users from "./Users";

const Finder = () => {
  const [userName, setUserName] = useState("");
  const [Loading, setLoading] = useState(false);
  const [userData, setUserData] = useState("");

  async function Githubfetchuser() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setUserName("");
      setLoading(false);
    }
  }

  function onSubmit() {
    Githubfetchuser();
  }

  if (Loading) {
    return <div>Loading ... </div>;
  }
  return (
    <div>
      <div className="container">
        <div className="Inputs">
          <input
            type="text"
            placeholder="Enter Github Profiles"
            name="search by username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="Buttons">
          <button onClick={onSubmit}>Search</button>
        </div>
        {userData && <Users user={userData} />}
      </div>
    </div>
  );
};

export default Finder;
