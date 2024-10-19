import { useEffect, useState } from 'react';
import styles from './Hero.module.css';


const images = [
  '/hero-image/sliderImage1.jpg',
  '/hero-image/sliderImage2.jpg',
  '/hero-image/sliderImage3.jpg',
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
      id='hero'
    >
      <div className={styles.heroContent}>
        <h2>Welcome to Our HR Services</h2>
        <p>
          We Build an Organization of High Repute,<br />
          And Immerse you with Transferable In-Demand skills<br />
          And provide the best solutions for managing your human resources efficiently
        </p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
