import './App.css';
import { Reviews } from './components/reviews/Reviews';

function App() {

  return (
      <div className="container">
       <div className="title">
            <h1>Our Reviews</h1>
            <div className="underline"></div>
        </div>
        <Reviews/>
      </div>
      
  );
}

export default App;
