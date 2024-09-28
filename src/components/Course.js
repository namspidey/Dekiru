import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { GiWatch } from "react-icons/gi";
import { FaListUl } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import axiosInstance from '../api/axiosInstance'; 

const Course = () => {
    const [activeSection, setActiveSection] = useState('intro'); // Khởi tạo trạng thái cho phần được chọn
    const { courseId } = useParams(); // Lấy courseId từ URL
    const navigate = useNavigate(); // Khởi tạo navigate
    const [course, setCourse] = useState(null); // Khởi tạo state cho thông tin khóa học
    const [loading, setLoading] = useState(true); // Khởi tạo state cho trạng thái loading
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axiosInstance.get(`/authen/course/get-course-by-id?courseId=${courseId}`);
                if (response.data.success) {
                    setCourse(response.data.data);
                } else {
                    setError(response.data.message);
                }
            } catch (error) {
                console.error('Error fetching course:', error);
                setError('Đã xảy ra lỗi khi tải khóa học.');
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [courseId]);

    const handleRegister = async () => {
        try {
            const response = await axiosInstance.get(`/authen/course/get-all-course-week?id=${courseId}`);
            await axiosInstance.post(`/authen/course/register-course?courseId=${courseId}`);
            if (response.data.success) {
                const courseWeeks = response.data.data;
                // Chuyển hướng đến Study.js và truyền dữ liệu
                navigate('/study', { state: { courseWeeks } });
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Error fetching course weeks:', error);
            setError('Đã xảy ra lỗi khi tải tuần khóa học.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId); // Cập nhật phần được chọn
    };

    return (
        <div className='course'>
            <div className='course-banner p-5 d-flex w-100'>
                <div className='text-white col-4'>
                    <h3>{course.courseName}</h3>
                    <div className='d-flex align-items-center '>
                        <CgProfile className='me-2' />{course.authorId}
                    </div>
                    <p></p>
                    <div className='mt-5'>
                        <button className='btn btn-lg btn-success' onClick={handleRegister}>Đăng ký miễn phí</button>
                    </div>
                    <div className='mt-3 d-flex'>
                        <div className='rounded p-1 me-2 course-ic' style={{ width: 'fit-content' }}>
                            <span><GiWatch /></span> {(course.learningHour/60).toFixed(1)} giờ
                        </div>
                        <div className='rounded p-1 me-2 course-ic' style={{ width: 'fit-content' }}>
                            <span><FaListUl /></span> {course.lectureAmmount} bài giảng
                        </div>
                        <div className='rounded p-1 me-2 course-ic' style={{ width: 'fit-content' }}>
                            <span><GrCertificate /></span> {course.hasCert ? 'Có chứng nhận' : 'Không có chứng nhận'}
                        </div>
                    </div>
                </div>
                <div className='col-8'>
                    <div className='w-100 h-100'>
                        <img src={course.courseImage} className='img-fluid w-100 h-100 rounded' style={{ objectFit: 'cover' }} alt="Course" />
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
                <div dangerouslySetInnerHTML={{ __html: course.courseDescription }} />
            </div>
            <div className='course-syllabus p-5' id='syllabus'>
                <h3>Giáo trình</h3>
                <p>Thông tin giáo trình sẽ được cập nhật sau.</p>
            </div>
            <div className='course-rate p-5' id='rate'>
                <h3>Đánh giá</h3>
                <p>Thông tin đánh giá sẽ được cập nhật sau.</p>
            </div>

            <div className='course-details p-5'>
                <h3>Kỹ năng bạn sẽ học</h3>
                <ul>
                    {course.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <h3>Bạn sẽ học được gì</h3>
                <ul>
                    {course.whatYouWillLearn.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>Giá khóa học</h3>
                <p>{course.price} VNĐ</p>
            </div>
        </div>
    );
};

export default Course;
