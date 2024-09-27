import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import axiosInstance from '../api/axiosInstance'; // Import axiosInstance

const Home = () => {
    const [activeOption, setActiveOption] = useState('Gợi ý');
    const [courses, setCourses] = useState([]); // Danh sách khóa học
    const [registeredCourses, setRegisteredCourses] = useState([]); // Danh sách khóa học đã đăng ký
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosInstance.get('/authen/course/get-all-course');
                if (response.data.success) {
                    setCourses(response.data.data); // Lưu danh sách khóa học
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        const fetchRegisteredCourses = async () => {
            try {
                const response = await axiosInstance.get('/authen/course/check-list-registered-course');
                if (response.data.success) {
                    setRegisteredCourses(response.data.data); // Lưu danh sách khóa học đã đăng ký
                }
            } catch (error) {
                console.error('Error fetching registered courses:', error);
            }
        };

        fetchCourses();
        fetchRegisteredCourses();
    }, []);

    const handleClick = (courseId) => {
        navigate(`/course/${courseId}`); // Chuyển hướng đến trang chi tiết khóa học
    };

    const isCourseRegistered = (courseId) => {
        return registeredCourses.some(course => course.id === courseId);
    };

    return (
        <div className='home'>
            <div className='home-banner p-4 '>
                <div className='text-white fw-bold'>Xin chào <span className='text-danger'>{userData ? userData.username : "Guest"}</span>. Chào mừng bạn đến với DEKIRU. Hãy <span className='text-white bg-danger p-1 rounded'>khám phá</span> nhé!</div>
                <div className='d-flex w-100'>
                    <div className='col-4 banner-1 mt-3 rounded'>
                        <div className='d-flex mt-4 '>
                            <div>
                                <div className='text-white d-flex'>
                                    <div className='ps-4'>
                                        <img src='ava.jfif' width={100} height={100} className='rounded-circle' alt="Avatar" />
                                    </div>
                                    <div className='p-3 d-flex align-items-center justify-content-center'>
                                        <div className='mt-2'>
                                            <h5>{userData ? userData.username : "Guest"}</h5>
                                            <p>Truong DH FPT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-white m-3'>
                            <progress className='progress-bar rounded' value={0.8} />
                        </div>
                    </div>
                    <div className='col-8 text-white'>
                        <div className='d-flex w-100 m-4 ms-5'>
                            <div className='col-4 pe-3'>
                                <h5>Khóa học</h5>
                                <div className='d-flex justify-content-between ms-1 me-3'>
                                    <div className='text-warning '>
                                        <h3>{courses.length}/35</h3>
                                    </div>
                                    <div className='pt-2'>
                                        {registeredCourses.length} chứng nhận
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <progress className='progress-bar1 ' value={0.5}></progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-bar ms-5'>
                <div className='d-flex flex-row'>
                    <div
                        onClick={() => handleClick('Gợi ý')}
                        className={`p-3 me-2 ${activeOption === 'Gợi ý' ? 'border-bottom border-primary border-4' : ''}`}
                        style={{ cursor: 'pointer' }}
                    >
                        Khóa học gợi ý
                    </div>
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
                        {courses.map(course => (
                            <div key={course.id} className='course-item m-2 rounded bg-light'>
                                <div className='img-container'>
                                    <img className='img-fluid w-100 h-100 rounded-top' src='hashira.png' alt={course.courseName} />
                                </div>
                                <div className='p-2 home-item ms-2'>
                                    <span className='p-1 rounded'>Khóa học</span>
                                    <p className='m-0 fs-5'>{course.courseName}</p>
                                    <p className='fs-6 mb-0'>{course.authorId}</p>
                                    <p className='mt-0 pt-0'>
                                        <FaStar className='star' />
                                        <FaStarHalfAlt className='star' />
                                        <FaRegStar className='star' />
                                    </p>
                                    <button className='btn btn-primary float-end m-2 mb-3' onClick={() => handleClick(course.id)}>
                                        {isCourseRegistered(course.id) ? 'Vào học ngay' : 'Đăng ký ngay'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='home-courses d-flex flex-row p-2'>
                        {registeredCourses.map(course => (
                            <div key={course.id} className='course-item m-2 rounded bg-light'>
                                <div className='img-container'>
                                    <img className='img-fluid w-100 h-100 rounded-top' src='hashira.png' alt={course.courseName} />
                                </div>
                                <div className='p-2 home-item ms-2'>
                                    <span className='p-1 rounded'>Khóa học</span>
                                    <p className='m-0 fs-5'>{course.courseName}</p>
                                    <p className='fs-6 mb-0'>{course.authorId}</p>
                                    <p className='mt-0 pt-0'>
                                        <FaStar className='star' />
                                        <FaStarHalfAlt className='star' />
                                        <FaRegStar className='star' />
                                    </p>
                                    <button className='btn btn-primary float-end m-2 mb-3' onClick={() => handleClick(course.id)}>Vào học ngay</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;