import './App.css';
import Confetti from './Confetti';
import Wishes from './Wishes';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Confetti />
              <div className="congrats">
                <p className="congrats__msg">Congrats Ayo</p>
                <Link to="/wishes"> 
                  <button className="congrats__btn">From us all</button>
                </Link>
              </div>
            </>
          } />
          <Route path="/wishes" element={<Wishes />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
