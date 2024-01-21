import JobContent from './JobContent';
import { JobCategoriesContainer } from '../../../container/JobCategoriesContainer';
import styles from './Job.module.css';
import PropTypes from 'prop-types';

const Job = ({ data }) => {
  const { company, logo, new: isNew, featured, position, role, level, postedAt, contract, location, languages, tools } = data
  return (
    <li className={styles.job}>
      <JobContent  company={company} logo={logo}  position={position} postedAt={postedAt} contract={contract} location={location} featured={featured} isNew={isNew} />

      <JobCategoriesContainer role={role} level={level} languages={languages} tools={tools} />
    </li>
  );
};

Job.propTypes = {
  data: PropTypes.object,
};

export default Job;
