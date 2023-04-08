import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Obat from './container/Peternakan/Obat';
import Karyawan from './container/Peternakan/Karyawan';

function App() {
  return (
    <div className="App">
      <h1>Peternakan</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/obat' element={<Obat />}></Route>
          <Route path='/karyawan' element={<Karyawan />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;