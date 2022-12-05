import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import style from "./study.module.css";
import tech from "../constants/tech";
import study from "../constants/study";

const Study = () => {
  return (
    <>
      <h2 className={style.heading}>
        Technologies <span className={style.and}>AND</span> Education
      </h2>
      <div className={style.study} id="study">
        <div className={style.tech_icons}>
          {tech.map((item, ind) => (
            <div className={style.technologies} key={ind}>
              <div className={style.overly}>
                <img src={item.image} alt="css" loading="lazy" />
                <div className={style.overly_bar}>
                  <CircularProgressbar
                    value={item.percentage}
                    text={`${item.percentage} %`}
                    className={style.bar}
                    strokeWidth={9}
                    styles={buildStyles({
                      textColor: "red",
                      textSize: "1.2rem",
                      pathColor: "tomato",
                      trailColor: "gray",
                    })}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={style.study_details}>
          {study.map((item, ind) => (
            <div className={style.study_div} key={ind}>
              <div className={style.university}>
                <h2>{item.institute}</h2>
              </div>
              <div className={style.year}>
                <h3>{item.degree}</h3>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Study;
