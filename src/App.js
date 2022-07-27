import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'
import UserInput from './components/UserInput'
import ProtectedRoutes from "./components/ProtectedRoutes";



function App() {
  return (
    <HashRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<UserInput />}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokedexDetail />} />
          </Route> 
          
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
