import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { useState, useEffect } from 'react';

import { Route, Routes, Link, NavLink, Navigate } from 'react-router-dom'
import Course from './components/Course';
import Study from './components/Study';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Speech from './components/Speech'
import 'primeicons/primeicons.css';
function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLogin') === 'true'
    setIsLogin(loggedIn)
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.setItem('isLogin', 'false')
    setIsLogin(false)
  };

  return (
    <div className="App">
      <Header isLogin={isLogin} logout={logout} setIsLogin={setIsLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/course' element={<Course />} />
        <Route path='/study' element={<Study/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/notfound' element={<NotFound/>}/>
        <Route path='/speech' element={<Speech/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
