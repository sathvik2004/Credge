import './Components/images.png';
import Login from './Components/Login.js';
import LoginFac from './Components/LoginFac.js';
import LoginRec from './Components/LoginRec.js';
import Home from './Components/Home.js';
import Homeadm from './Components/Homeadm.js';
import Homerec from './Components/Homerec.js';
import ATS from './Components/ATS.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/LoginFac" element={<LoginFac />} />
  <Route path="/LoginRec" element={<LoginRec />} />
  <Route path="/Home" element={<Home/>}/>
  <Route path="/Homeadm" element={<Homeadm/>}/>
  <Route path="/Homerec" element={<Homerec/>}/>
  <Route path="/ATS" element={<ATS/>} />
</Routes>
   </BrowserRouter>
  );
}

export default App;
