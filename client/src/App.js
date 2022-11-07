import './reset.css';
import './variables.css';
import Button from './components/utilities/Button/Button';

function App() {
  return (
    <div className='App container'>
      <h1 style={{ fontSize: '1.6rem' }}>Henry Videogames</h1>
      <Button color='primary' text='hazne click' />
      <Button color='info' text='click' />
    </div>
  );
}

export default App;
