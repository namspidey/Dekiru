import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ isLogin, logout, setIsLogin }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(''); // Khởi tạo state cho tên người dùng

    const handleLogout = () => {
        logout();
        localStorage.removeItem('userData'); // Xóa dữ liệu người dùng
        navigate('/'); // Chuyển hướng về trang chính sau khi đăng xuất
    }

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const loggedIn = userData && userData.token; // Kiểm tra xem có token không
        setIsLogin(!!loggedIn);
        if (loggedIn) {
            setUsername(userData.username || ''); // Cập nhật tên người dùng
        } else {
            setUsername(''); // Đặt lại tên người dùng nếu không đăng nhập
        }
    }, [setIsLogin, isLogin]); // Thêm isLogin vào dependency array

    return (
        <div className='header d-flex justify-content-between'>
            <div className='header-left'>
                <div className='header-logo'>
                    <NavLink className='nav-link' to='/'><h3 className='m-3'>DEKIRU</h3></NavLink>
                </div>
                <div className='header-bar'></div>
            </div>
            <div className='header right'>
                {!isLogin ? (
                    <div>
                        <ul className='d-flex flex-row'>
                            <div className='m-3'><NavLink className='nav-link' to='/login'>Đăng nhập</NavLink></div>
                            <div className='m-3'><NavLink className='nav-link' to='/signup'>Đăng ký</NavLink></div>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <ul className='d-flex flex-row'>
                            <div className='m-3'><NavLink className='nav-link' to='/'>{username}</NavLink></div> {/* Hiển thị tên người dùng */}
                            <div className='m-3' onClick={handleLogout}><NavLink className='nav-link' to='/'>Đăng xuất</NavLink></div>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;