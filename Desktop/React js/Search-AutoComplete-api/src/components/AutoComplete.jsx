import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const AutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setseachParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filtered, setFiltered] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setseachParams(query);
    if (query && query.length > 0) {
      const filterData =
        users && users.length > 0
          ? users.filter((item) => item.toLowerCase().indexOf(query) >= 0)
          : [];
      setFiltered(filterData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event) {
    setLoading(false);
    setseachParams(event.target.innerText);
    setFiltered([]);
    setShowDropDown(false);
  }

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length > 0) {
        const userNames = data.users.map((item) => item.firstName);
        setUsers(userNames);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="search-auto-complete">
      <input
        type="text"
        placeholder="Enter message"
        onChange={handleChange}
        value={searchParams}
      />
      {loading && <div className="loading-indicator">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      {showDropDown && filtered.length > 0 && (
        <div className="suggestions-container">
          <Suggestions data={filtered} onClick={handleClick} />
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
