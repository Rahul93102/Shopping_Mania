import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

//defined default limit = 5 ,page = 1
const Slider = ({ url, limit = 5, page = 1 }) => {
  const [Image, setImage] = useState([]);
  const [Slide, setSlide] = useState(0);

  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);

  async function getdata(getUrl) {
    try {
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImage(data);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function prevSlider() {
    setSlide(Slide == 0 ? Image.length - 1 : Slide - 1);
  }

  function nextSlider() {
    setSlide(Slide == Image.length - 1 ? 0 : Slide + 1);
  }

  if (Loading) {
    return <div>Loading ... </div>;
  }

  if (Error) {
    return <div>{Error}</div>;
  }

  useEffect(
    () => {
      if (url != "") {
        getdata(url);
      }
    },
    [url],
    [page],
    [limit]
  );

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={prevSlider}
        className="sliders left-slider"
      />
      {Image && Image.length
        ? Image.map((Item, index) => (
            <img
              key={index}
              src={Item.download_url}
              alt={Item.download_url}
              className={
                index === Slide ? "current-slider" : "non-current-slider"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={nextSlider}
        className="sliders right-slider"
      />
      <span className="circle-indicators">
        {Image && Image.length > 0
          ? Image.map((_, index) => (
              <button
                key={index}
                className={
                  Slide === index ? "current-swipper" : "non-current-swipper"
                }
                onClick={() => setSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Slider;
