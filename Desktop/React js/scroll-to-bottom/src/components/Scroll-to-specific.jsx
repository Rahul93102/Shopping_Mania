import React, { useRef } from "react";

const Speicifc = () => {
  const ref = useRef(null);

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollTo() {
    if (ref.current) {
      const pos = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <h1>Scroll to Particular Section</h1>
      <button onClick={handleScrollTo}>Scroll to Third Card</button>
      {data.map((item, index) => (
        <div key={index} ref={index === 2 ? ref : null} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default Speicifc;
