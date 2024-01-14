import JobContent from './JobContent';
import { JobCategoriesContainer } from '../../../container/JobCategoriesContainer';
import styles from './Job.module.css';

const Job = () => {
  return (
    <li className={styles.job}>
      <JobContent />

      <JobCategoriesContainer />
    </li>
  );
};

export default Job;
