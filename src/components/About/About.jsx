import React from "react";
import { motion } from "framer-motion";

import style from "./about.module.css";
import bg from "../../assests/about2.jpg";
import pdf from "../../assests/Hassanali.pdf";
import { TypingText } from "./Custom";
import { staggerContainer } from "../../utils/motion";

const About = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 20 }}>
        About <span style={{ color: "#eb311f", fontSize: "2rem" }}>ME</span>
      </h2>
      <div id="about" className={style.about}>
        <div className={style.info}>
          <div className={style.my_self}>
            <p>Hi! My Name Is</p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <TypingText title="HASSAN ALI" />

              <p>
                <strong> Web Application Developer</strong> having a special
                interest in Frontend technologies and experience of building Web
                applications with JavaScript <strong>React JS</strong>{" "}
                <strong>Next JS</strong> and some other cool libraries and
                frameworks.
              </p>
            </motion.div>
            <a href={pdf} download>
              Resume
            </a>
          </div>
        </div>
        <div className={style.my_image}>
          <div className={style.image}>
            <img src={bg} alt="pic" loading="lazy" />
            <div className={style.frame}></div>
            <div className={style.grid}>
              <div className={style.data_white}></div>
              <div></div>
              <div></div>
              <div className={style.data_white}></div>
            </div>

            <div className={style.image_border}>
              <img src={bg} alt="pic" loading="lazy" />
              <div className={style.grid}>
                <div></div>
                <div className={style.data_white}></div>
                <div className={style.data_white}></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
