import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'
import UserInput from './components/UserInput'
import ProtectedRoutes from "./components/ProtectedRoutes";



function App() {
  return (
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<UserInput />}/>

              <Route element={<ProtectedRoutes/>}>
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/pokedex/:id" element={<PokedexDetail />} />
              </Route> 
              
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
