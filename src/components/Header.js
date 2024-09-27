import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AvatarDropdown from './AvatarDropdown';

import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
const Header = ({ isLogin, logout, setIsLogin }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLogin') === 'true'
        setIsLogin(loggedIn)
    }, [isLogin])

    const menuRight = useRef(null);
    const toast = useRef(null);
    const items = [
        {
            
            items: [
                {
                    label: 'Thông tin tài khoản',
                    
                },
                {
                    label: 'Hồ sơ của tôi',
                    
                },
                {
                    label: 'Bạn bè',
                    
                },
                {
                    label: 'Lớp của tôi',
                    
                },
                {
                    label: 'Lịch sử thanh toán',
                    
                },
                {
                    label: 'Thoát',
                    
                }
            ]
        }
    ];

    return (
        <div className='header d-flex justify-content-between '>
            <div className='header-left d-flex flex-row'>
                <div className='header-logo'>
                    <NavLink className='nav-link' to='/'><h3 className='m-3'>DEKIRU</h3></NavLink>

                </div>
                <div className='header-bar d-flex header-left-bar'>
                    <div className='d-flex align-items-center me-3 ms-3'>Học tập</div>
                    <div className='d-flex align-items-center me-3 ms-3'>Luyện tập</div>
                    <div className='d-flex align-items-center me-3 ms-3'>Thi đấu</div>
                    <div className='d-flex align-items-center me-3 ms-3'>Thử thách</div>
                    <div className='d-flex align-items-center me-3 ms-3'>Sự kiện</div>
                    <div className='d-flex align-items-center me-3 ms-3'>Xếp hạng</div>
                    <div className='d-flex align-items-center me-3 ms-3'>Người đóng góp</div>
                    <div className='d-flex align-items-center me-3 ms-3'>Chia sẻ</div>

                </div>
            </div>
            <div className='header right d-flex  align-items-center justify-content-center me-5'>
                {!isLogin ? (
                    
                        <ul className='d-flex flex-row mb-0'>
                            <div className='m-3'><NavLink className='nav-link' to='/login'>Đăng nhập</NavLink></div>
                            <div className='m-3'><NavLink className='nav-link' to='/signup'>Đăng ký</NavLink></div>


                        </ul>
                    
                ) : (
                    <div className=''>
                        <div >
                            {/* <div className='m-3'>
                                <NavLink className='nav-link' to='/'>
                                <img src='ava.jfif' width={40} height={40} className='rounded-circle me-2'></img>
                                </NavLink>
                            </div>
                            <div className='m-3'><NavLink className='nav-link' to='/'>Đăng xuất</NavLink></div> */}
                            

                            
                                <Toast ref={toast}></Toast>
                                <img onClick={(event) => menuRight.current.toggle(event)}   src='ava.jfif' width={50} height={50} className='rounded-circle me-2'></img>
                                
                                <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                                
                                
                            

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;