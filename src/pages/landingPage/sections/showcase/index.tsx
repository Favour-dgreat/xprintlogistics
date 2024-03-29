import { RegularButton } from "../../../../components/buttons";

import styles from "./showcase.module.css";

function Showcase() {
  return (
    <div className={styles.showcase_container}>
     

      <div className={styles.showcase_inner}>
        <h1 data-aos="zoom-out" data-aos-delay="500">
          Send Anything, Anytime.
        </h1>
        <p data-aos="fade-down" data-aos-duration="400">
        Delivering Excellence, One Parcel at a Time: Welcome to Xprint Logistics, Where Speed, Precision, and Reliability Define Our Service. Join Us on the Road to Seamless Deliveries.
        </p>

        <div
          // data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
        >
          <RegularButton
            title="Get the app"
            className={styles.showcase_button}
            url="https://bit.ly/devfestado23"
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
