import './reset.css';
import './variables.css';
// import Input from './components/utilities/input/Input';
import Home from './components/home/Home';
// import Button from './components/utilities/Button/Button';
import LandingPage from './components/landingPage/LandingPage';
import { Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        {/* <LandingPage /> */}
        {/* <Input placeholder='mensaje' width='50%' label='Name' type='checkbox' value='somevalue' /> */}
        {/* <Button color='primary' text='hazne click' />
      <Button color='info' text='click' /> */}
        <Home />
      </Switch>
    </div>
  );
}

export default App;
