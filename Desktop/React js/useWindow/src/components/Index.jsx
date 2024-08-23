import { useEffect, useState } from "react";

export default function useWindow() {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  function handleResize() {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [windowSize.height, windowSize.width];
}
