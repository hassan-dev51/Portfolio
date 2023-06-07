import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./home.module.css";
const Home = () => {
  return (
    <div className={`${style.container} .image_placeholder`} id="home">
      <Navbar />
      <div className={style.main_heading}>
        <div className={style.heading}>
          <p>
            Empowering Your <br />
            <span style={{ color: "green", fontSize: "36px" }}>Web</span>
            <br />
            Identity
          </p>
          <h3>
            We develop{" "}
            <span style={{ color: "green", fontSize: "36px" }}>Websites</span>
            <br /> that{" "}
            <span style={{ color: "green", fontSize: "36px" }}>
              Ignite
            </span>{" "}
            your business
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
