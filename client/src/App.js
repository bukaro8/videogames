import './reset.css';
import './variables.css';
import style from './App.module.css';
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/findGame/SearchBar';

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <LandingPage />} />
        <Route exact path='/home' render={() => <Home />} />
        {/* <Route exact path={`/${}`} */}
        <Route exact path='/videogames/find' render={() => <SearchBar />} />
        {/* <Route exact path='/videogame/:id' render={(id) => <MovieDetail id={id} />} /> */}
      </Switch>
    </div>
  );
}

export default App;
