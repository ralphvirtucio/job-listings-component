import styles from './JobContent.module.css'
import companyImage from '../../../assets/images/photosnap.svg'

const JobContent = () => {
  return (
    <div className={styles.job__content}>
      <div className={styles.job__image}>
        <img
          src={companyImage}
          alt='Photosnap'
        />
      </div>

      <div className={styles['job__content--info']}>
        <div className={styles['job__content--info-header']}>
          <h2 className={styles.job__company}>Photosnap</h2>
          <div className={styles.job__activity}>
          <span>New!</span>
          <span>Featured</span>
          </div>
        </div>

        <div className={styles.job__title}>
          <h3>Senior Frontend Developer</h3>
        </div>

        <div className={styles.job__details}>
          <p>1d ago</p>
          <p>Full Time</p>
          <p>USA only</p>
        </div>
      </div>
    </div>
  );
};

export default JobContent;
