import { useState } from 'react';
import './reset.css';
import './variables.css';
import style from './App.module.css';
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import { Switch, Route } from 'react-router-dom';
import CardDetail from './components/card-detail/CardDetail';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/findGame/SearchBar';
import AddVideogame from './components/addVideogame/AddVideogame';
function App() {
  const [, setFakeState] = useState();
  const trigger = (par) => {
    setFakeState(par);
  };
  return (
    <div className={style.App}>
      <Navbar trigger={trigger} />
      <Switch>
        <Route exact path='/' render={() => <LandingPage />} />
        <Route exact path='/home' render={() => <Home />} />
        <Route
          exact
          path={`/videogames/form`}
          render={() => <AddVideogame />}
        />
        <Route exact path='/videogames/find' render={() => <SearchBar />} />
        <Route exact path='/:id' render={(id) => <CardDetail id={id} />} />
        <Route
          exact
          path='/videogames/:id'
          render={(id) => <CardDetail id={id} />}
        />
      </Switch>
    </div>
  );
}

export default App;
