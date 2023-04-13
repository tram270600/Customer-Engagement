import { navData } from "../lib/NavData";
import styles from "./SideNav.module.scss";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { NavLink } from "react-router-dom";

export default function Sidenav() {
  return (
    <div className="sideNav">
      {navData.map((item) => {
        return (
          <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </NavLink>
        );
      })}
      <button className={styles.menuBtn}>
        <KeyboardDoubleArrowLeftIcon />
      </button>
       
    </div>
  );
}
