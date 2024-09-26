import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = ({ isLogin, logout,setIsLogin }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLogin') === 'true'
        setIsLogin(loggedIn)
      }, [isLogin])

    return (
        <div className='header d-flex justify-content-between '>
            <div className='header-left'>
                <div className='header-logo'>
                <NavLink className='nav-link' to='/'><h3 className='m-3'>DEKIRU</h3></NavLink>
                    
                </div>
                <div className='header-bar'>

                </div>
            </div>
            <div className='header right'>
            {!isLogin ? (
                <div >
                <ul className='d-flex flex-row'>
                    <div className='m-3'><NavLink className='nav-link' to='/login'>Đăng nhập</NavLink></div>
                    <div className='m-3'><NavLink className='nav-link' to='/signup'>Đăng ký</NavLink></div>


                </ul>
                </div>
            ):(
                <div>
                    <ul className='d-flex flex-row'>
                    <div className='m-3'><NavLink className='nav-link' to='/'>Name</NavLink></div>
                    <div className='m-3'><NavLink className='nav-link' to='/'>Đăng xuất</NavLink></div>


                </ul>
                </div>
            )}
            </div>
        </div>
    );
};

export default Header;