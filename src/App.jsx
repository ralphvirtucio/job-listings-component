import Header from './components/Header';
import JobList from './components/JobList';
import { CategoryFilterContainer } from './container/CategoryFilterContainer';
import data from './data.json'
import { useState } from 'react';



const App = () => {
  const [jobData, setJobData] = useState(data)
  const [selectedCategories, setSelectedCategories] = useState([])



  return (
    <>
      <Header />

      <main>
        <CategoryFilterContainer />

        <JobList jobData={jobData}/>
      </main>
    </>
  );
};

export default App;
