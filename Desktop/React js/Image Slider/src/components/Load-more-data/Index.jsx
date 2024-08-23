import React, { useEffect, useState } from "react";
import "./style.css";

const Index = () => {
  const [Loading, setLoading] = useState(false);
  const [Products, setProducts] = useState([]);
  const [Count, setCount] = useState(0);
  const [disable, setdisable] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          Count === 0 ? 0 : Count * 20
        }`
      );

      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setProducts((prevData) => [...prevData, ...data.products]);
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [Count]);

  // after fetching 100 products makrs them as disabled
  useEffect(() => {
    if (Products && Products.length == 100) {
      setdisable(true);
    }
  }, [Products]);

  if (Loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="loader">
      <div className="product-container">
        {Products && Products.length > 0
          ? Products.map(
              (
                item,
                index // used this parenthesis as it's returning directly without any return statement needed
              ) => (
                <div className="product">
                  <img key={index} src={item.thumbnail} alt="image rendering" />
                  <p>{item.title}</p>
                </div>
              )
            )
          : null}
      </div>
      <div className="disable-container">
        <button
          disabled={disable}
          onClick={() => setCount((Count) => Count + 1)}
        >
          {disable ? "Disabled" : "More Products "}
        </button>
        <p>{disable ? "Already 100 components rendered " : null}</p>
      </div>
    </div>
  );
};

export default Index;
