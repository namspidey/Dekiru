import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes, Link, NavLink } from 'react-router-dom'


const Home = () => {

    const [activeOption, setActiveOption] = useState('Gợi ý');
    const navigate = useNavigate();
    const handleClick = (option) => {
        setActiveOption(option);
    };


    return (
        <div className='home'>
            <div className='home-banner p-4 '>
                <div className='text-white fw-bold'>Xin chào ABC. Chào mừng bạn đến với DEKIRU. Hãy khám phá nhé!</div>
                <div>

                </div>
            </div>
            <div className='home-bar ms-5'>
            <div className='d-flex flex-row'>
                    {/* "Khóa học gợi ý" button */}
                    <div
                        onClick={() => handleClick('Gợi ý')}
                        className={`p-3 me-2 ${activeOption === 'Gợi ý' ? 'border-bottom border-primary border-4' : ''}`}
                        style={{ cursor: 'pointer' }}
                    >
                        Khóa học gợi ý
                    </div>
                    
                    {/* "Đang học" button */}
                    <div
                        onClick={() => handleClick('Đang học')}
                        className={`p-3 ${activeOption === 'Đang học' ? 'border-bottom border-primary border-4' : ''}`}
                        style={{ cursor: 'pointer' }}
                    >
                        Đang học
                    </div>
                </div>

                
                {activeOption === 'Gợi ý' ? (
                <div className='home-courses d-flex flex-row p-2'>
                    <div className='course-item m-2 rounded bg-light'>
                        <div className='img-container '>
                            <img className='img-fluid w-100 h-100 rounded-top' src='hashira.png'></img>
                        </div>
                        <div className='p-2'>
                            <p className='m-0'>Sơ cấp</p>
                            <p>Hoai Nam</p>
                            <p>499.000 VNĐ</p>
                            <button className='btn btn-primary float-end m-2'>Đăng ký ngay</button>
                        </div>
                    </div>
                    
                    


                </div>
                ) : (
                    <div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;