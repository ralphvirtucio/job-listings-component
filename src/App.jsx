import Header from './components/Header';
import JobList from './components/JobList';
import { CategoryFilterContainer } from './container/CategoryFilterContainer';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <CategoryFilterContainer />

        <JobList />
      </main>
    </>
  );
};

export default App;
