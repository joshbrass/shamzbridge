import styles from './Service.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h3 className="section_title">Our <span>Services</span></h3>
        <div className={styles.serviceCards}>
          <ServiceCard title="HR Consulting" description="We provide expert HR consulting services." />
          <ServiceCard title="Recruitment" description="Our recruitment services help you find the best talent." />
          <ServiceCard title="Payroll Management" description="We streamline your payroll processes." />
        </div>
      </div>
    </section>
  );
};

export default Services;
