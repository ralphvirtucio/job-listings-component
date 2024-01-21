import Job from './Job';
import PropTypes from 'prop-types'


const JobList = ({jobData, onSelectCategory}) => {
  const mappedData = jobData.map(data => {
    return (
      <Job key={data.id} data={data} onSelectCategory={onSelectCategory} />
    )
  })

  return (
    <ul>
     {mappedData}
    </ul>
  );
};

JobList.propTypes = {
  jobData: PropTypes.array,
  onSelectCategory: PropTypes.func
}

export default JobList;
