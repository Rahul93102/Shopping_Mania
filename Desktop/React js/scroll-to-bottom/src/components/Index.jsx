import React, { useRef, useState, useEffect } from "react";

const Scroller = () => {
  const [data, setData] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="scroller-container">
      <h1 className="header">Product List</h1>
      <button className="scroll-button" onClick={handleScrollToBottom}>
        Scroll to Bottom
      </button>
      <ul className="product-list">
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item.id} className="product-item">
              {item.title}
            </li>
          ))
        ) : (
          <li className="no-products">No products available</li>
        )}
      </ul>
      <button className="scroll-button" onClick={handleScrollToTop}>
        Scroll to Top
      </button>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Scroller;
