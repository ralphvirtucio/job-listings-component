import Job from './Job';
import jobData from '../../data.json'

const JobList = () => {
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

export default JobList;
