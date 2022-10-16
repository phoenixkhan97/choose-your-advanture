import Town from "./pages/Town"
import Nav from "./pages/Nav"
import Home from "./pages/Home"
import {Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/town" element={<Town/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
