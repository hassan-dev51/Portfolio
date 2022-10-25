import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import logo from "../../assests/logo.png";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 450) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav className={navbar ? style.nav : `${style.nav} ${style.color}`}>
      <div className={style.logo}>
        <a href="#home">
          <img src={logo} alt="logo" loading="lazy" />
        </a>
      </div>
      <div className={style.menu_icons}>
        <ul className={style.navlinks}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#study">Education</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </div>
      <div className={style.navbar_menu}>
        <HiMenuAlt4
          onClick={() => {
            setToogle(true);
          }}
        />
        {toogle && (
          <motion.div
            whileInView={{ x: [150, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX
              onClick={() => {
                setToogle(false);
              }}
            />
            <ul>
              <li>
                <a
                  href="#home"
                  onClick={() => {
                    setToogle(false);
                  }}
                >
                  Home
                </a>
              </li>
              <hr style={{ width: "100%" }} />
              <li>
                <a
                  href="#about"
                  onClick={() => {
                    setToogle(false);
                  }}
                >
                  About
                </a>
              </li>
              <hr style={{ width: "100%" }} />
              <li>
                <a
                  href="#study"
                  onClick={() => {
                    setToogle(false);
                  }}
                >
                  Education
                </a>
              </li>
              <hr style={{ width: "100%" }} />
              <li>
                <a
                  href="#work"
                  onClick={() => {
                    setToogle(false);
                  }}
                >
                  Work
                </a>
              </li>
              <hr style={{ width: "100%" }} />
              <li>
                <a
                  href="#contact"
                  onClick={() => {
                    setToogle(false);
                  }}
                >
                  {" "}
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
