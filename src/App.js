import logo from './logo.svg';
import './App.css';
import Leaf from './Page/Leaf/Leaf';
import Home from './Page/Home';
import Header from './components/JS/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lamp from './Page/Lamp/Lamp';

function App() {
  return (
    <div className="App">

            <BrowserRouter>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaf" element={<Leaf />} />
          <Route path="/lamp" element={<Lamp />} />

          {/* <Route path="/thank-you" element={<ThankYou />} /> */}

        </Routes>
      </BrowserRouter>
      {/* <Header/>
      <Home/> */}
    
      {/* <Challenge1/> */}
      {/* <Leaf/> */}
    </div>
  );
}

export default App;
