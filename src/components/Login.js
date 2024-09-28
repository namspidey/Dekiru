import React, { useState } from 'react'; // Thêm useState
import { Formik, Form, Field } from 'formik';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance'; // Import axiosInstance

const Login = ({ setIsLogin }) => { // Nhận setIsLogin như một prop
    const [errorMessage, setErrorMessage] = useState(''); // Khởi tạo state cho thông báo lỗi
    const [loading, setLoading] = useState(false); // Khởi tạo state cho loading
    const nav = useNavigate(); // Khởi tạo useNavigate

    const handleSubmit = async (values) => {
        setLoading(true); // Bắt đầu loading
        try {
            const response = await axiosInstance.post('/authen/authen/sign-in', {
                username: values.email, // Sử dụng email cho username
                password: values.password,
            });
            console.log(response.data.data.token);
            if (response.data.success) {
                localStorage.setItem('userData', JSON.stringify(response.data.data)); // Lưu toàn bộ dữ liệu
                localStorage.setItem('token', response.data.data.token);
                // Cập nhật trạng thái đăng nhập trong App.js
                setIsLogin(true); // Cập nhật trạng thái đăng nhập
                nav('/'); // Chuyển hướng đến trang chính
            } else {
                setErrorMessage(response.data.message || 'Đăng nhập không thành công.'); // Cập nhật thông báo lỗi
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Đã xảy ra lỗi. Vui lòng thử lại.'); // Thông báo lỗi chung
        } finally {
            setLoading(false); // Kết thúc loading
        }
    };

    return (
        <div className='login'>
            <div className='d-flex justify-content-center'>
                <div>
                    <h3 className='text-center m-5'>Đăng nhập</h3>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Hiển thị thông báo lỗi */}
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleSubmit} // Gọi hàm handleSubmit khi gửi form
                    >
                        <Form>
                            <div className="form-group m-2">
                                <Field name="email" className="form-control form-control-lg" type="text" placeholder="Tài khoản" />
                            </div>
                            <div className="form-group m-2">
                                <Field name="password" className="form-control form-control-lg" type="password" placeholder="Mật khẩu" />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p>Bạn chưa có tài khoản? <NavLink to='/signup'>Đăng ký ngay</NavLink></p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button disabled className="btn btn-lg btn-secondary m-3"><FaGoogle /><span> Google</span></button>
                                <button disabled className="btn btn-lg btn-primary m-3"><FaFacebook /><span> Facebook</span></button>
                            </div>
                            <div className='d-flex justify-content-center m-3'>
                                <button type="submit" className="btn btn-lg btn-dark" disabled={loading}>
                                    {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;