import React from "react";
import Slider from "./Slider";
import Index from "./components/Load-more-data/Index";

const App = () => {
  return (
    <div>
      <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />{" "}
      {/* <Index /> */}
    </div>
  );
};

export default App;
