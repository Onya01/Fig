import './App.css';
import About from './components/About';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);


function App() {
  return (
    <div>
      <About />
    </div>
  );
}

export default App;
