import styles from './JobContent.module.css';
import companyImage from '../../../assets/images/photosnap.svg';
import { Pill } from '../../Pill';

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
           <Pill label='New!'/>
           <Pill label='Featured'/>
          </div>
        </div>

        <div className={styles.job__title}>
          <h3>Senior Frontend Developer</h3>
        </div>

        <ul className={styles.job__details}>
          <li>
            <p>1d ago</p>
          </li>
          <li>
            <p>Full Time</p>
          </li>
          <li>
            <p>USA only</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobContent;
