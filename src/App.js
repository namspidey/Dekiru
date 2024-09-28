import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { useState, useEffect } from 'react';
//import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Course from './components/Course';
import Study from './components/Study';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Speech from './components/Speech';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const loggedIn = userData && userData.token; // Kiểm tra xem có token không
    setIsLogin(!!loggedIn);
  }, [setIsLogin]);

  const logout = () => {
    localStorage.removeItem('userData'); // Xóa dữ liệu người dùng
    setIsLogin(false);
  };

  return (
    <div className="App">
      <Header isLogin={isLogin} logout={logout} setIsLogin={setIsLogin} />
      <Routes>
        <Route path='/' element={<Home isLogin={isLogin} logout={logout} setIsLogin={setIsLogin}/>} />
        <Route path='/login' element={isLogin ? <Navigate to='/' /> : <Login setIsLogin={setIsLogin} />} />
        <Route path='/signup' element={isLogin ? <Navigate to='/' /> : <Signup />} />
        <Route path='/course' element={<Course />} />
        <Route path='/study' element={<Study />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/speech' element={<Speech />} />
        <Route path='/course/:courseId' element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;
