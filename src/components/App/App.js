
import './App.css';
import Home from '../Home/Home'
import About from '../About/About';
import Work from '../Work/Work'
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Error from '../Error/Error';
import Contact from '../Contact/Contact';
import { Switch, Route } from 'react-router-dom';

function App() {
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
            <Work />
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
        )}/>
        <Route
        exact
        path='*'
        render={() => {
          <Error />
        }}/>
      </Switch>
    </div>
  );
}

export default App;

