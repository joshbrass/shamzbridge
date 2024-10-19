import styles from './AboutUs.module.css';
import heroImage from '../../assets/images/about_shazam-removebg-preview.png'
import { motion } from "framer-motion";
import ContainerReveal from '../../components/animations/container-reveal/ContainerReveal';
import { WhatWeOfferList } from '../../constants/WhatWeOfferList';
import PrimaryButton from '../../components/buttons/primary-button/PrimaryButton';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div
        className={`app__row_container ${styles.what_we_offer_section__inner}`}
      >
        {/* LEFT COLUMN */}
        <div className={styles.section__left_column}>
          <motion.div className={styles.hero_image_container}>
            <motion.img
              src={heroImage}
              alt="a man fixing a car"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className={styles.section__right_column}>
          {/* Section Title */}
          <ContainerReveal>
            <h1 className="section_title">
              About <span>Us</span>
            </h1>
          </ContainerReveal>

          {/* Section Description */}
          <ContainerReveal delay={0.1}>
            <p className="section_sub_text_wrapper">
            Our journey began with a simple yet ambitious goal: to provide service 
            beyond compare. Over the years, we have evolved and grown, expanding our offerings to 
            meet the diverse needs of our clients. From tailored solutions to comprehensive consultations
            </p>
          </ContainerReveal>

          {/* List of What We Offer  */}
          <ContainerReveal delay={0.1}>
            <ul className={styles.services_list_wrapper}>
              {WhatWeOfferList.map((service, index) => (
                <li className="section_sub_text_wrapper" key={index + 1}>
                  {service}
                </li>
              ))}
            </ul>
          </ContainerReveal>

          {/* Join the Waitlist Button */}
          <div className={styles.waitlist_button_container}>
            <ContainerReveal delay={0.2}>
              <PrimaryButton
                placeholder="Join Us"
                onClick={() => (window.location.href = "/#waitlist")}
                className={styles.waitlist_button_wrapper}
              />
            </ContainerReveal>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default About;
