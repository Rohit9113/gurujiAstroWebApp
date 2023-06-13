import React from "react";
import CircularImageWithContent from "./CircularImageWithContent";
import sun from "../media/circlelogo/sun.png";
import sunSur from "../media/circlelogo/sun-surrounding.png";
// import { Flex, Box } from "@chakra-ui/react";
import problem1 from "../media/circlelogo/problemLogo/Love.png";
import problem2 from "../media/circlelogo/problemLogo/Marriage.png";
import problem3 from "../media/circlelogo/problemLogo/Job.png";
import problem4 from "../media/circlelogo/problemLogo/Rupees Coins.png";
import problem5 from "../media/circlelogo/problemLogo/Global Education.png";
import problem6 from "../media/circlelogo/problemLogo/Medical sign.png";
import problem7 from "../media/circlelogo/problemLogo/Orbit.png";
import problem8 from "../media/circlelogo/problemLogo/Birth.png";
import problem9 from "../media/circlelogo/problemLogo/Family Care.png";
import problem10 from "../media/circlelogo/problemLogo/Number Block.png";

const ImageContent = () => {
  return (
    <img
      src={sun}
      alt="Sun"
      style={{ maxWidth: "60%", background: "transparent" }}
    />
  );
};

const TheCircle = () => {
  const iconAndText = [
    { icon: problem1, text: "Love Related problem" },
    { icon: problem2, text: "Marriage Problem" },
    { icon: problem3, text: "Job/Business Problems " },
    { icon: problem4, text: "Money Problem" },
    { icon: problem5, text: "Education Problems" },
    { icon: problem6, text: "Health Problems" },
    { icon: problem7, text: "Grah Shanti" },
    { icon: problem8, text: "Child Birth Issue" },
    { icon: problem9, text: "Husband Wife Problems" },
    { icon: problem10, text: "Lucky Number/Color" },
  ];
 
  return (
    <div className="circle" style={{ backgroundColor: 'white' }}>
      <h1 className="heading">Many Problem One Solution</h1>
      <div
        className="container "
        style={{ display: "inline-flex", justifyContent: "space-between" }}
      >
        <div id="left" style={{marginLeft:"150px"}}>
          {iconAndText.slice(0, 5).map((item, index) => (
            <div key={index} className="icon-card">
              <div
                className="icon-wrapper"
                style={{ backgroundColor: "orangered" }}
              >
                <img src={item.icon} alt={item.text} />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div>
          <CircularImageWithContent
            image={sunSur}
            size={300}
            style={{ maxWidth: "100%" }}
            content={<ImageContent />}
          />
        </div>
        <div id="right">
          {iconAndText.slice(5).map((item, index) => (
            <div key={index} className="icon-card">
             
              <p>{item.text}</p>
              <div
                className="icon-wrapper"
                style={{ backgroundColor: "orangered" }}
              >
                <img src={item.icon} alt={item.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheCircle;
