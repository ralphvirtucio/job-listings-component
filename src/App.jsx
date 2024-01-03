import Header from './components/Header';
import { CategoryFilterContainer } from './container/CategoryFilterContainer';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <CategoryFilterContainer />

        <ul>
          <li>
            <div>
              <div>
                <img
                  src=''
                  alt=''
                />
              </div>

              <div>
                <div>
                  <h2>Photosnap</h2>
                  <span>New!</span>
                  <span>Featured</span>
                </div>

                <div>
                  <h3>Senior Frontend Developer</h3>
                </div>

                <div>
                  <p>1d ago</p>
                  <p>Full Time</p>
                  <p>USA only</p>
                </div>
              </div>
            </div>

            <div>
              <ul>
                <li>
                  <button>Frontend</button>
                </li>
                <li>
                  <button>Senior</button>
                </li>
                <li>
                  <button>HTML</button>
                </li>
                <li>
                  <button>CSS JavaScript</button>
                </li>
                <li>
                  <button></button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

export default App;
