import { Link} from "react-router-dom";
import logo from "../../assets/header/xprintlogo.png";
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
import hamburger from "../../assets/header/hamburger.svg";
import { useState } from "react";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_inner}>
          <img src={logo} alt="devfest23" />
          <div className={styles.navbar_ul}>
            <Link to="/">About</Link>
            <Link
              target="__blank"
              to="http://bit.ly/devfestado23sponsorshipdeck"
            >
              Track Your Delivery
            </Link>
            <Link to="https://bit.ly/devfestado23callforpartners">
              Support
            </Link>
          </div>
          <div>
            <RegularButton
              title="Get the app"
              className={styles.navbar_button}
              url="https://bit.ly/devfestado23"
            />
            <img
              src={hamburger}
              className={styles.navbar_hamburger}
              onClick={openNav}
              alt="menu"
            />
          </div>
        </div>
      </div>

      <div
        className={`${styles.sidenav} ${
          isNavOpen ? `${styles.sidenav_show}` : ''
        }`}
      >
        <div className={styles.sidenav_inner}>
          <a
            href="javascript:void(0)"
            className={styles.closebtn}
            onClick={closeNav}
          >
            &times;
          </a>
          <Link to="/">About</Link>
          <Link target="__blank" to="http://bit.ly/devfestado23sponsorshipdeck">
          Track Your Delivery
          </Link>
          <Link to="https://bit.ly/devfestado23callforpartners">
          Support
          </Link>
          <RegularButton
            title="Get the app"
            className={styles.sidebar_button}
            url="https://bit.ly/devfestado23"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
