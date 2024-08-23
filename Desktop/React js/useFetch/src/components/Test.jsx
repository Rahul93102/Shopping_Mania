import React from "react";
import useFetch from "./index";

const Test = () => {
  const { data, url, loading } = useFetch("https://dummyjson.com/products", {});

  return (
    <div>
      <h1>Using Custom hooks fetch</h1>
      <div className="container">
        {data && data.products && data.products.length > 0
          ? data.products.map((item) => <p key={item.key}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default Test;
