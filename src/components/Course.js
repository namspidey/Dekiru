import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { GiWatch } from "react-icons/gi";
import { FaListUl } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const Course = () => {
    const [activeSection, setActiveSection] = useState('intro'); // Khởi tạo trạng thái cho phần được chọn
    

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId); // Cập nhật phần được chọn
    };

    return (
        <div className='course'>
            <div className='course-banner p-5 d-flex w-100'>
                <div className='text-white col-4'>
                    <h3>Tiếng Nhật sơ cấp</h3>
                    <div className='d-flex align-items-center '>
                        <CgProfile className='me-2' />Tomioka sensei
                    </div>
                    <p>shikanoko nokonoko koshitantan</p>
                    <div className='mt-5'>
                        <button className='btn btn-lg btn-success'>Đăng ký miễn phí</button>
                    </div>
                    <div className='mt-3  d-flex'>
                        <div className='rounded p-1 me-2 course-ic ' style={{ width: 'fit-content' }}>
                            <span><GiWatch className='' /></span> 38 giờ
                        </div>

                        <div className='rounded p-1 me-2 course-ic' style={{ width: 'fit-content' }}>
                            <span><FaListUl className='' /></span> 38 giờ
                        </div>

                        <div className='rounded p-1 me-2 course-ic' style={{ width: 'fit-content' }}>
                            <span><GrCertificate 
                            className='' /></span> 38 giờ
                        </div>

                        
                    </div>
                </div>
                <div className='col-8'>
                    <div className='w-100 h-100'>
                        <img src='hashira.png' className='img-fluid w-100 h-100 rounded' style={{ objectFit: 'cover' }}></img>
                    </div>
                </div>
            </div>

            {/* Thanh điều hướng */}
            <div className='course-bar d-flex flex-row ps-5 bg-light'>
                <div
                    className={`p-3 me-2 ${activeSection === 'intro' ? 'border-bottom border-primary border-4' : ''}`}
                    onClick={() => scrollToSection('intro')}
                >
                    Giới thiệu
                </div>
                <div
                    className={`p-3 me-2 ${activeSection === 'syllabus' ? 'border-bottom border-primary border-4' : ''}`}
                    onClick={() => scrollToSection('syllabus')}
                >
                    Giáo trình
                </div>
                <div
                    className={`p-3 me-2 ${activeSection === 'rate' ? 'border-bottom border-primary border-4' : ''}`}
                    onClick={() => scrollToSection('rate')}
                >
                    Đánh giá
                </div>

            </div>

            {/* Các phần nội dung */}
            <div className='course-intro p-5' id='intro'>
                <h3>Giới thiệu</h3>
                <p>shikanoko nokonoko koshitantan</p>
            </div>
            <div className='course-syllabus p-5' id='syllabus'>
                <h3>Giáo trình</h3>
                <p>shikanoko nokonoko koshitantan</p>
            </div>
            <div className='course-rate p-5' id='rate'>
                <h3>Đánh giá</h3>
                <p>shikanoko nokonoko koshitantan</p>
            </div>

        </div>
    );
};

export default Course;
