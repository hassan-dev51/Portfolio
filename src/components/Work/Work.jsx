import React from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import projects from "../constants/projects";
import style from "./work.module.css";

const Work = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "1rem" }}>
        My <span>Projects</span> Demo
      </h2>
      <div id="work" className={style.work}>
        <div className={style.ap__flex}>
          {projects.map((item, ind) => (
            <motion.div
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              key={ind}
            >
              <div className={`${style.app__work_item} ${style.ap_flex}`}>
                <div className={`${style.app__work_img} ${style.ap_flex}"`}>
                  <img src={item.image} alt="{work.name}" loading="lazy" />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className={`${style.app__work_hover} ${style.ap_flex}`}
                  >
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ opacity: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={style.ap_flex}
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={item.git} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ opacity: [1, 0.9] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={style.ap_flex}
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                <div className={`${style.app__work_contant} ${style.ap_flex}`}>
                  <h4 className="bold-text">{item.name}</h4>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: "1rem",
                      fontWeight: "500",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                  <div className={`${style.app__work_tag} ${style.ap_flex}`}>
                    {item.tag}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
