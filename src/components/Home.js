import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const Home = () => {

    const [activeOption, setActiveOption] = useState('Gợi ý');
    const navigate = useNavigate();
    const handleClick = (option) => {
        setActiveOption(option);
    };
    const userData = JSON.parse(localStorage.getItem('userData'));

    return (
        <div className='home'>
            <div className='home-banner p-4 '>
                <div className='text-white fw-bold'>Xin chào <span className='text-danger'>DO Dang Long</span>. Chào mừng bạn đến với DEKIRU. Hãy <span className='text-white bg-danger p-1 rounded'>khám phá</span> nhé!</div>
                <div className='d-flex w-100'>
                    <div className='col-4 banner-1 mt-3 rounded'>
                        <div className='d-flex mt-4 '>
                            <div >
                                <div className='text-white d-flex'>
                                    <div className='ps-4'>
                                        <img src='ava.jfif' width={100} height={100} className='rounded-circle'></img>
                                    </div>
                                    <div className='p-3 d-flex align-items-center justify-content-center'>
                                        <div className='mt-2'>
                                            <h5>{userData != null ? userData.username : "Guest"}</h5>
                                            <p>Truong DH FPT</p>
                                        </div>

                                    </div>

                                </div>
                            </div>



                        </div>

                        <div className='text-white m-3' >
                            <progress className='progress-bar rounded' value={0.8} />

                        </div>
                    </div>
                    <div className='col-8 text-white'>
                        <div className='d-flex w-100 m-4 ms-5'>
                            <div className='col-4 pe-3'>
                                <h5>Khóa học</h5>
                                <div className='d-flex justify-content-between ms-1 me-3'>
                                    <div className='text-warning '>
                                        <h3>28/35</h3>
                                    </div>
                                    <div className='pt-2'>
                                        2 chưng nhận
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <progress className='progress-bar1 ' value={0.5}></progress>
                                </div>
                            </div>
                            <div className='col-4 pe-3'>
                                <h5>Luyện tập</h5>
                                <div className='d-flex justify-content-between ms-1 me-3'>
                                    <div className='text-warning '>
                                        <h3>10/1445</h3>
                                    </div>

                                </div>
                                <div className='mt-1'>
                                    <progress className='progress-bar1 ' value={0.5}></progress>
                                </div>
                            </div>
                            <div className='col-4 pe-3'>
                                <h5>Thứ hạng tốt nhất</h5>
                                <div className='d-flex  ms-1 me-3'>
                                    <div className='text-warning '>
                                        <h3>1/1</h3>
                                    </div>
                                    <div className='ms-3 pt-2'>
                                        cuộc thi
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <progress className='progress-bar1 ' value={0.5}></progress>
                                </div>
                            </div>
                        </div>
                        <div className='ps-5'>
                            <div>
                                Thành tích của bạn
                            </div>
                            <div className='mt-1'>
                                <img src='ava.jfif' width={40} height={40} className='rounded-circle me-2'></img>
                                <img src='ava.jfif' width={40} height={40} className='rounded-circle me-2'></img>
                                <img src='ava.jfif' width={40} height={40} className='rounded-circle me-2'></img>
                                <img src='ava.jfif' width={40} height={40} className='rounded-circle me-2'></img>

                            </div>
                            
                        </div>
                    </div>
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
                            <div className='p-2 home-item ms-2'>
                                <span className='p-1 rounded '>Khóa học</span>
                                <p className='m-0 fs-5'>Sơ cấp</p>
                                <p className='fs-6 mb-0'>Hoai Nam</p>
                                <p className='mt-0 pt-0'>
                                    <FaStar className='star'/>
                                    <FaStarHalfAlt className='star'/>

                                    <FaRegStar className='star'/>


                                </p>
                                <button className='btn btn-primary float-end m-2 mb-3'>Đăng ký ngay</button>
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