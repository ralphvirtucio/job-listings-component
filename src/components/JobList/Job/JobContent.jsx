import styles from './JobContent.module.css';
import companyImage from '../../../assets/images/photosnap.svg';
import { Pill } from '../../Pill';
import PropTypes from 'prop-types';


const JobContent = ({ company, logo, position, postedAt, contract, location, featured, isNew }) => {
  return (
    <div className={styles.job__content}>
      <div className={styles.job__image}>
        <img
          src={logo}
          alt={company}
        />
      </div>

      <div className={styles['job__content--info']}>
        <div className={styles['job__content--info-header']}>
          <h2 className={styles.job__company}>{company}</h2>
          <div className={styles.job__activity}>
            <Pill label='New!' />
            <Pill label='Featured' />
          </div>
        </div>

        <div className={styles.job__title}>
          <h3>{position}</h3>
        </div>

        <ul className={styles.job__details}>
          <li>
            <p>{postedAt}</p>
          </li>
          <li>
            <p>{contract}</p>
          </li>
          <li>
            <p>{location}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

JobContent.propTypes = {
  company: PropTypes.string,
  logo: PropTypes.string,
  position: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  location: PropTypes.string,
  featured: PropTypes.bool,
  isNew: PropTypes.bool
}

export default JobContent;
