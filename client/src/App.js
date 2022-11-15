import './reset.css';
import './variables.css';
import style from './App.module.css';
import Home from './components/home/Home';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LandingPage from './components/landingPage/LandingPage';
import { Link, Switch, Route } from 'react-router-dom';
import actions from './REDUX/actions';
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  const allGenres = useSelector((state) => state.genres);
  useEffect(() => {
    dispatch(actions.loadApiGames());
    dispatch(actions.getGenres());
  }, []);
  return (
    <div className={style.App}>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <LandingPage />} />
        <Route exact path='/home' render={() => <Home />} />
        {/* <Route exact path='/videogame/:id' render={(id) => <MovieDetail id={id} />} /> */}
      </Switch>
    </div>
  );
}

export default App;
