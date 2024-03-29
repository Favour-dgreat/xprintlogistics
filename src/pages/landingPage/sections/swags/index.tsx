import styles from './swags.module.css';
import swag from '../../../../assets/pictures/Picture.png';
import { RegularButton } from '../../../../components/buttons';

const Swags = () => {
  return (
    <div className={styles.swag_container}>
      <div className={styles.swag_inner}>
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={styles.app}>
          Download Our App
        </h1>

        <div className={styles.flex_container}>
          <div className={styles.flex_item}>
      
            <div className={styles.flexx}>
              <p className={styles.dot}>
              Connecting the dots in Seconds.
              </p>
         
              <p className={styles.ios}>
              Available for iOS and Android devices.
              </p>

              <div className={styles.btn_container}>
                <RegularButton
                  title="Get the app"
                  className={styles.regularButton}
                  url="https://shop.devfestadoekiti.com/"
                />
              </div>
            </div>
          </div>
          <div className={styles.flex_items}>
            <img src={swag} alt="swag" className={styles.aa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swags;
