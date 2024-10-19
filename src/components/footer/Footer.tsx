import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 HR Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
