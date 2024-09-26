import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';


const Login = () => {
    const nav = useNavigate()


    return (
        <div className='login'>
            <div className='d-flex justify-content-center  '>
                <div>
                    <h3 className='text-center m-5'>Đăng nhập</h3>
                    <Formik>
                        <Form>
                            <div className="form-group m-2 " >
                                <Field  name="email" className="form-control form-control-lg" type="email" placeholder="Email" />
                            </div>
                            <div className="form-group m-2">
                                <Field name="password" className="form-control form-control-lg" type="password" placeholder="Mật khẩu" />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p>Bạn chưa có tài khoản? <NavLink to='/signup'>Đăng ký ngay</NavLink></p>
                                
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button disabled className="btn btn-lg btn-secondary m-3"><FaGoogle /><span> Google</span>
                                </button>
                                <button disabled className="btn btn-lg btn-primary m-3"><FaFacebook /><span> Facebook</span>

                                </button>

                            </div>
                            <div className='d-flex justify-content-center m-3'>
                            <button type="submit" className="btn btn-lg btn-dark ">Đăng nhập</button>

                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>

    );
};

export default Login;