import Header from './components/Header';
import JobList from './components/JobList';
import { CategoryFilterContainer } from './container/CategoryFilterContainer';
import data from './data.json'
import { useState } from 'react';



const App = () => {
  const [jobData, setJobData] = useState(data)
  const [selectedCategories, setSelectedCategories] = useState([])

  function mergeCategories(item) {
    return [item.role, item.level, ...item.languages, ...item.tools]
  }



  const filteredJobData = jobData.filter(item => selectedCategories.every(tag => mergeCategories(item).includes(tag.name)))

 
  function handleSelectCategories(category) {

    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const values = crypto.getRandomValues(new Uint8Array(64))

    const uniqueId = values.reduce((acc, curr) => acc + possible[curr % possible.length], '')

    
    const categoryObj = {
      id: uniqueId,
      name: category 
    }


    if(!selectedCategories.some(c => c.name === category)) {
      setSelectedCategories((prev) => [...prev, categoryObj])
    } else {
      alert('Category Already selected')
    }
  }


  function handleClearCategory() {
    setSelectedCategories([])
  }


  function handleRemoveCategory(id) {
    setSelectedCategories((prev) => prev.filter(value => value.id !== id))
  }



  return (
    <>
      <Header />

      <main>
      <CategoryFilterContainer categories={selectedCategories} onRemoveCategory={handleRemoveCategory} onClearCategories={handleClearCategory}/>

        <JobList jobData={filteredJobData} onSelectCategory={handleSelectCategories}/>
      </main>
    </>
  );
};

export default App;
