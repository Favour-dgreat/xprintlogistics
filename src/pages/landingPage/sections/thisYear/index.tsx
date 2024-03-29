import Image from '../../../../components/images';
import styles from './thisyear.module.css';
import thisyear1 from '../../../../assets/pictures/Frame 5.png';
import thisyear2 from '../../../../assets/pictures/Frame 6.png';
import thisyear3 from '../../../../assets/pictures/Frame 7.png';


const ThisYear = () => {
  return (
    <div className={styles.thisyear_container}>
      <div className={styles.thisyear_inner}>
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
         Our Process
        </h1>
        <p className={styles.thisyear_p}>Seamless process to follow for a seamless delivery </p>

          <div className={styles.thisyear_flex_left}>
            <Image src={thisyear1} />
            <Image src={thisyear2} />
            <Image src={thisyear3} />
    
        </div>
      </div>
    </div>
  );
};

export default ThisYear;
