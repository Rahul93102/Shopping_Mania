import { react, useState } from "react";
import { FaStar } from "react-icons/fa";

//by default as props for star is set as 5
const Rating = ({ no_of_stars = 5 }) => {
  const [Rating, setRating] = useState(0);
  const [hower, sethower] = useState(0); // as we are just stating however values of move mouse inside because when intially started 1,2,3,4,5,6,7 backewards 8,7,6,5,4,,3,2,1

  function hadlemouseclick(currentIdx) {
    setRating(currentIdx);
  }

  function handlemousemove(currentIdx) {
    sethower(currentIdx);
  }

  function handlemouseleave() {
    sethower(Rating);
  }

  return (
    <>
      <div className="star-rating">
        {[...Array(no_of_stars)].map((_, idx) => {
          idx++;
          return (
            <FaStar
              key={idx}
              className={idx <= (hower || Rating) ? "active" : "inactive "}
              onClick={() => hadlemouseclick(idx)}
              onMouseMove={() => handlemousemove(idx)}
              onMouseLeave={() => handlemouseleave}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
};

export default Rating;
