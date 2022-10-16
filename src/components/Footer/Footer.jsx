import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineMobile,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import style from "./footer.module.css";
const Footer = () => {
  let date = new Date();
  date.getFullYear();
  return (
    <div id="footer" className={style.footer}>
      <footer>
        <div className={style.social}>
          <a href="https://www.instagram.com/hassan.ali7887/">
            <AiFillInstagram title="Instagram" className={style.instagram} />{" "}
          </a>
          <a href="https://twitter.com/hassanalimunir">
            <AiOutlineTwitter title="twitter" className={style.twitter} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100008762237511">
            <AiFillFacebook title="facebook" className={style.facebook} />{" "}
          </a>
          <a href="mailto:hassanmunir363@gmail.com">
            <SiGmail title="Gmail" className={style.gmail} />
          </a>
          <a href="tel:+92 3456760792">
            <AiOutlineMobile className={style.twitter} title="+92 3456760792" />
          </a>
        </div>
        <div className={style.rights}>
          Copyright &copy; All Rights are Reserved {new Date().getFullYear()}
        </div>
        <div className={style.link}>
          <a href="#home">Home</a> | <a href="#about">About</a>|{" "}
          <a href="#study">Education</a> |<a href="#work">Work</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
