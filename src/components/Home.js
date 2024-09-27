import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaGoogle, FaFacebook } from "react-icons/fa";
import { Formik, Form, Field } from 'formik';

const Home = ({ isLogin, logout, setIsLogin }) => {

    const [activeOption, setActiveOption] = useState('Gợi ý');
    const navigate = useNavigate();
    const handleClick = (option) => {
        setActiveOption(option);
    };


    return (
        <div>
            {isLogin ? (
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
                                                    <h5>Do Dang Long</h5>
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
                                            <FaStar className='star' />
                                            <FaStarHalfAlt className='star' />

                                            <FaRegStar className='star' />


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
            ) : (
                <div className='home-notlogin' >
                    <div className='home-notlogin-banner w-100 d-flex'>
                        <div className='a2 col-6'>
                            <div className='p-5 '>
                                <h1 className='p-5 ' style={{ textShadow: '2px 2px 5px white' }}>Nền tảng học tiếng Nhật<br></br> đẳng cấp pro max vip </h1>
                                <div className='ms-5 p-3 a1 mb-3'>
                                    +  Học tiếng Nhật từ con số 0 !
                                </div>
                                {/* <div className='ms-5 p-3 a1 mb-3'>
                                    +  Khơi dậy đam mê văn hóa
                                </div> */}
                                <div className='ms-5 p-3 a1 mb-3'>
                                    +  Chinh phục thế giới , khẳng định bản thân
                                </div>
                                <div className='ms-5 p-3 a1 mb-3'>
                                    +  Mở ra cơ hội việc làm hấp dẫn trong tương lai
                                </div>
                            </div>
                        </div>
                        <div className='a2 col-6'>
                            <div className='home-login p-5 '>
                                <Formik

                                >
                                    <Form>
                                        <div className='mb-3 '><h4 style={{ textShadow: '1px 1px 4px aqua' }}>Học tiếng Nhật cùng mọi người với Dekiru</h4></div>
                                        <div className="form-group m-2 mt-5">
                                            <Field name="email" className="form-control form-control-lg" type="text" placeholder="Tài khoản" />
                                        </div>
                                        <div className="form-group m-2">
                                            <Field name="password" className="form-control form-control-lg" type="password" placeholder="Mật khẩu" />
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <p>Bạn chưa có tài khoản? <NavLink to='/signup'>Đăng ký ngay</NavLink></p>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <button disabled className="btn btn-lg btn-secondary m-3"><FaGoogle /><span> Google</span></button>
                                            <button disabled className="btn btn-lg btn-primary m-3"><FaFacebook /><span> Facebook</span></button>
                                        </div>
                                        <div className='d-flex justify-content-center m-3'>
                                            {/* <button type="submit" className="btn btn-lg btn-dark" disabled={loading}>
                                    {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                                </button> */}
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    {/* <div className='section mt-4'>
                        <div className='text-center'>
                            <h2>Lý do học chúng ta nên học<br></br> tiếng Nhật từ hôm nay?</h2>
                        </div>
                        <div>

                        </div>
                    </div> */}

                </div>
            )}
        </div>


    );
};

export default Home;