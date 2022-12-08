import Town from "./pages/Town"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import {Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/town" element={<Town/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
