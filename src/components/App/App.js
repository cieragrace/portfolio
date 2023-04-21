
import './App.css';
import Home from '../Home/Home'
import About from '../About/About';
import Work from '../Work/Work'
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Error from '../Error/Error';
import Contact from '../Contact/Contact';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import getAPIData from '../../apiCalls';

function App() {
  const [projects, setProjects] = useState([])

  useEffect = () => {
    getAPIData()
    .then((data) => setProjects(data))
    .catch((error) => console.log(error))
  }

  return (
    <div className='app-container'>
      <Switch>
        <Route 
          exact
          path='/'
          render={() => (
            <Home />
          )}
        />
        <Route
          exact
          path='/about'
          render={() => (
            <About />
          )}
        />
        <Route
          exact
          path='/projects'
          render={() => (
            <Work 
            projects={projects}
            />
          )}
        />
        <Route 
          exact
          path='/projects/:id'
          render={({ match }) => (
            <ProjectDetails />
          )}
        />
        <Route
          exact
          path='/contact'
          render={() => (
            <Contact />
          )}
        />
        <Route
          exact
          path='*'
          render={() => {
            <Error />
          }}
        />
      </Switch>
    </div>
  );
}

export default App;

