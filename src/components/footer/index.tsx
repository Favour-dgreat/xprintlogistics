import styles from "./footer.module.css";
import logo from "../../assets/footer/IMG_3152 2 (2).png";
import icon from "../../assets/footer/Frame 10.svg";
import icon1 from "../../assets/footer/Frame 11.svg";
import icon2 from "../../assets/footer/Frame 59.svg";
import icon3 from "../../assets/footer/Link_margin.svg";
import icon4 from "../../assets/footer/Link_margin (1).svg";
import icon5 from "../../assets/footer/Link_margin (2).svg";
import icon6 from "../../assets/footer/Link_margin (3).svg";
import icon7 from "../../assets/footer/Link.svg";


import { Link } from "react-router-dom";



function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_inner_left}>
            <img src={logo} alt="devfestlogo23" className={styles.logo}/>
           
          </div>
          <div
            className={`${styles.footer_inner_middle} ${styles.footer_res_removal}`}
          >
            <h3 className={styles.links}>Quick Links</h3>
            <ul>
            <Link
              className={styles.footer_mail}
              target="__blank"
              to="mailto:faith.oni@gdgadoekiti.dev"
            >
            <p className={styles.pp}>Home</p>
            
            </Link>
            <Link
              className={styles.footer_mail}
              target="__blank"
              to="mailto:faith.oni@gdgadoekiti.dev"
            >
            <p className={styles.pp}>About</p>
            
            </Link>
            <Link
              className={styles.footer_mail}
              target="__blank"
              to="mailto:faith.oni@gdgadoekiti.dev"
            >
            <p className={styles.pp}>Contact Us</p>
            
            </Link>

            </ul>

            
          </div>
          <div className={styles.footer_inner_rights}>
           
           
              <h3 className={styles.contact}>Contact Us</h3>
              <div className={styles.flexxer}>
              <img src={icon} alt="devfestlogo23" />
              <p  className={styles.spica}>admin@xprintlogistics</p>
              </div>

              <div  className={styles.flexxer}>
              <img src={icon1} alt="devfestlogo23" />
              <p className={styles.spicas}>080 -123-4566-34</p>
              </div>

            
         
          </div>
          <div className={styles.footer_inner_right}>
           
              <h3 className={styles.update}> Stay Updated </h3>
              <h3  className={styles.update}>Join our mailing list</h3>
              <div className={styles.stuff}>
              <input type="email" placeholder="Enter Your Email" className={styles.placeholder} />
              <img src={icon2} alt="devfestlogo23" className={styles.ii}/>
              </div>
              <div className={styles.social}>
              {/* <Link
              className={styles.icons}
              target="__blank"
              to="mailto:faith.oni@gdgadoekiti.dev"
            > */}
              <img src={icon3} alt="devfestlogo23" className={styles.ii}/>
              {/* </Link> */}
              <img src={icon4} alt="devfestlogo23" className={styles.ii}/>
              <img src={icon5} alt="devfestlogo23" className={styles.ii}/>
              <img src={icon6} alt="devfestlogo23" className={styles.ii}/>
              <img src={icon7} alt="devfestlogo23" className={styles.ii}/>

              </div>
           
          </div>
        </div>
      </div>
            <hr  />
      <div className={styles.footer_bottom}>
        <div className={styles.copy}>
        <p>&copy; 2024 Xprint Logistics

                        </p>
                        </div>
            <div className={styles.linkss}>
                        <Link
              className={styles.footer_mails}
              target="__blank"
              to="mailto:faith.oni@gdgadoekiti.dev"
            >
            <p className={styles.pp}>Terms & Conditions</p>
            
            </Link>
            <Link
              className={styles.footer_mails}
              target="__blank"
              to="mailto:faith.oni@gdgadoekiti.dev"
            >
            <p className={styles.pp}>Privacy</p>
            
            </Link>
            <Link
              className={styles.footer_mails}
              target="__blank"
              to="mailto:faith.oni@gdgadoekiti.dev"
            >
            <p className={styles.pp}>Cookies</p>
            
            </Link>
            <Link
              className={styles.footer_mails}
              target="__blank"
              to="mailto:faith.oni@gdgadoekiti.dev"
            >
            <p className={styles.pp}>Security</p>
            
            </Link>
                        </div>
      </div>
    </>
  );
}

export default Footer;
