import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const toggleMenu = () => {
    setNavBarOpen(!navBarOpen);
  };

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "HowWeWork",
    },
    {
      id: 4,
      link: "Benefits",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className={styles.Navbar}>
      <p>Alarde</p>
      <div className={styles.MobileMenu}>
        <FiMenu onClick={toggleMenu} />
      </div>
      {navBarOpen && (
        <ul>
          {links.map((x) => (
            <div key={x.id}>
              <Link to={x.link} spy={true} smooth={true} offset={-70} duration={500}>
                {x.link === "HowWeWork" ? "How we work" : x.link}
              </Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

