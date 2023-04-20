import { navData } from "../lib/NavData";
import styles from "./SideNav.module.scss";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import sailBoat from "../assets/sail-boat.svg"
import classNames from "classnames";

export default function Sidenav() {
  const [isExpand, setIsExpand] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState(0);
  const toggleExpandNav = () => {
    setIsExpand(!isExpand);
  };

  return (
    <>
      <div className={isExpand ? styles.sideNav : styles.sideNavClosed}>
        <div className={styles.companyName}>
          <img src={sailBoat} alt="Sail boat" />
          <p className={isExpand ? '' : styles.companyNameClosed}> Eastern India </p>
        </div>
        {navData.map((item) => {
          return (
            <NavLink
              onClick={() => setActiveNavItem(item.id)}
              key={item.id}
              className={classNames(styles.sideItem, {
                [styles.sideItemActive]: activeNavItem === item.id,
              })}
              to={item.link}
            >
              {item.icon}
              <span
                className={isExpand ? styles.linkText : styles.linkTextClosed}
              >
                {item.text}
              </span>
            </NavLink>
          );
        })}
        <button className={styles.menuBtn} onClick={toggleExpandNav}>
          {isExpand ? (
            <KeyboardDoubleArrowLeftIcon />
          ) : (
            <KeyboardDoubleArrowRightIcon />
          )}
        </button>
      </div>
    </>
  );
}
