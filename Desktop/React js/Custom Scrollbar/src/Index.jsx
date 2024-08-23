import React, { useEffect, useState } from "react";
import "./Index.css"; // Import the CSS file

const Index = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollpercentage, setScrollpercentage] = useState(0);
  const [error, setError] = useState("");

  async function fetchdata(geturl) {
    setLoading(true);
    try {
      const response = await fetch(geturl);
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setData(result.products);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchdata(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const heightcal =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollpercentage((howMuchScrolled / heightcal) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (error) {
    return <div className="error-message">Error! Wait a few mins</div>;
  }

  if (loading) {
    return <div className="loading-message">Loading!</div>;
  }

  return (
    <div>
      <div className="scroll-progress-bar">
        <div
          className="current-progress-bar"
          style={{ width: `${scrollpercentage}%` }}
        ></div>
      </div>
      <div className="container">
        <h1>Scroll Percentage Indicator</h1>
      </div>
      <div className="data-class">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
              </div>
            );
          })
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default Index;
