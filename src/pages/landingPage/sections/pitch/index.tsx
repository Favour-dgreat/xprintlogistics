import styles from "./pitch.module.css";
import pitchImg from "../../../../assets/pitch/logo.svg";
import { useState } from 'react';

export const Pitch:React.FC = () => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
  

  return (
    <section id="pitch_container" className={styles.pitch_container}>
    
      <div className={styles.pitch_inner}>
        <h2 className={styles.pitch_header}>
         About Us 
        </h2>
        <div className={styles.content_div}>
          <div className={styles.img_div}>
            <img className={styles.pitchImage} src={pitchImg} alt="img" />
          </div>

          <div className={styles.text_div}>
            <p className={styles.paragraph}>
            At Xprint Logistics, we are committed to simplifying your delivery experience. With a passion for efficiency and customer satisfaction, we strive to be your trusted partner in delivering goods swiftly and securely. Our dedicated team works tirelessly to ensure that your packages reach their destination on time, every time.
            </p>
            <p className={styles.paragraph}>
            Founded on the principles of reliability and convenience, Xprint Logistics offers a wide range of delivery solutions tailored to meet your specific needs. Whether you require same-day delivery or specialized handling, we have you covered.  
            </p>
           
            <p className={styles.paragraph}>
             With advanced tracking technology and a network of experienced couriers, we guarantee transparency and 
                accountability throughout the delivery process. Your peace of mind is our priority, and we go above and beyond to exceed your expectations. </p>

           
          <div>
            <div>
              {/* Additional content goes here */}
              {expanded && (
                <div>
                <p className={styles.paragraph}>Join the thousands of satisfied customers who rely on Xprint Logistics for their delivery needs. Experience the difference with Xprint Logistics – delivering with speed, delivering excellence.</p>
                </div>
              )}
            </div>
            <br/>
            <p className={styles.see}onClick={toggleExpanded}>{expanded ? 'See less...' : 'See more...'}</p>
          </div>

            {/* <div>


            {!expanded && (
                <button onClick={toggleExpanded}>See More</button>
            )}            
            {expanded && (

              <div>
                
             
              </div>
            )}
          </div> */}


          </div>
        </div>
      </div>
    </section>
  );
}


export default Pitch;
