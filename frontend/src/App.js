import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import GroupMenu from './partials/group/GroupMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user} = useAuthContext()

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/dashboard' element={ user ? <Home /> : <Navigate to="/" />}/>
            <Route path='/' element={ !user ? <Login/>  : <Navigate to="/dashboard" />}/>
            <Route path='/signup' element={ !user ? <Signup/> : <Navigate to="/dashboard" />}/>
            <Route path='/groups/:id' element={ user ? <GroupMenu/>: <Navigate to="/" />}/>
            <Route path='/about' element={ user ? <About/> : <Navigate to="/" />}/>
            <Route path='/contact' element={ user ? <Contact/> : <Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
