import React from "react";
import Testtabs from "./Test-tabs";

const Tabs = () => {
  const tabs = [
    { label: "tab 1", tittle: " Tab 1 Content is rendered " },
    { label: "tab 2", tittle: " Tab 2 Content is rendered " },
    { label: "tab 3", tittle: " Tab 3 Content is rendered " },
    { label: "tab 4", tittle: " Tab 4 Content is rendered " },
  ];

  function onChange(currentIdx) {
    console.log(currentIdx);
  }

  return (
    <div>
      <Testtabs tabsContent={tabs} onChange={onChange} />
    </div>
  );
};

export default Tabs;
