import React, { useState } from 'react'; // Thêm useState
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance'; // Import axiosInstance
import { ClipLoader } from 'react-spinners'; // Import ClipLoader từ react-spinners

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState(''); // Khởi tạo state cho thông báo lỗi
    const [loading, setLoading] = useState(false); // Khởi tạo state cho loading
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleSubmit = async (values) => {
        setLoading(true); // Bắt đầu loading
        try {
            const response = await axiosInstance.post('/authen/authen/sign-up', {
                username: values.username,
                passwordHash: values.password, // Sử dụng password cho passwordHash
                email: values.email,
            });
            console.log(response.data);
            if (response.data.success) {
                navigate('/login');
            } else {
                setErrorMessage(response.data.message || 'Đăng ký không thành công.'); // Cập nhật thông báo lỗi
            }
        } catch (error) {
            console.error(`${process.env.REACT_APP_PUBLIC_API_URL}/authen/authen/sign-up`);
            console.error('Error during signup:', error);
            setErrorMessage('Đã xảy ra lỗi. Vui lòng thử lại.'); // Thông báo lỗi chung
        } finally {
            setLoading(false); // Kết thúc loading
        }
    };

    return (
        <div className='signup'>
            <div className='d-flex justify-content-center'>
                <div>
                    <h3 className='text-center m-5'>Đăng ký</h3>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Hiển thị thông báo lỗi */}
                    {loading ? ( // Hiển thị biểu tượng loading nếu đang loading
                        <div className="d-flex justify-content-center">
                            <ClipLoader color="#000" loading={loading} size={50} />
                        </div>
                    ) : (
                        <Formik
                            initialValues={{ username: '', email: '', password: '' }}
                            onSubmit={handleSubmit} // Gọi hàm handleSubmit khi gửi form
                        >
                            <Form>
                                <div className="form-group m-2">
                                    <Field name="username" className="form-control form-control-lg" type="text" placeholder="Tên đăng nhập" />
                                </div>
                                <div className="form-group m-2">
                                    <Field name="email" className="form-control form-control-lg" type="email" placeholder="Email" />
                                </div>
                                <div className="form-group m-2">
                                    <Field name="password" className="form-control form-control-lg" type="password" placeholder="Mật khẩu" />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <p>Bạn đã có tài khoản? <NavLink to='/login'>Đăng nhập ngay</NavLink></p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button disabled className="btn btn-lg btn-secondary m-3"><FaGoogle /><span> Google</span></button>
                                    <button disabled className="btn btn-lg btn-primary m-3"><FaFacebook /><span> Facebook</span></button>
                                </div>
                                <div className='d-flex justify-content-center m-3'>
                                    <button type="submit" className="btn btn-lg btn-dark">Đăng ký</button>
                                </div>
                            </Form>
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signup;