import './reset.css';
import './variables.css';
import Input from './components/utilities/input/Input';
// import Button from './components/utilities/Button/Button';
// import LandingPage from './components/landingPage/LandingPage';
// import { Router } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundColor: 'grey' }} className='App'>
      {/* <LandingPage /> */}
      <Input placeholder='mensaje' width='50%' label='Name' />
      {/* <Button color='primary' text='hazne click' />
      <Button color='info' text='click' /> */}
    </div>
  );
}

export default App;
