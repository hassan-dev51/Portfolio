import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";
import style from "./about.module.css";
export const TypingText = ({ title }) => (
  <motion.p variants={textContainer}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index} className={style.h1}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
