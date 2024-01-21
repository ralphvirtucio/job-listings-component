import Job from './Job';
import PropTypes from 'prop-types'


const JobList = ({jobData}) => {
  const mappedData = jobData.map(data => {
    return (
      <Job key={data.id} data={data} />
    )
  })

  return (
    <ul>
     {mappedData}
    </ul>
  );
};

JobList.propTypes = {
  jobData: PropTypes.array
}

export default JobList;
