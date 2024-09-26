import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
const Signup = () => {
    return (
        <div className='signup'>
            <div className='d-flex justify-content-center  '>
                <div>
                    <h3 className='text-center m-5'>Đăng ký</h3>
                    <Formik>
                        <Form>
                        <div className="form-group m-2 " >
                                <Field  name="username" className="form-control form-control-lg" type="email" placeholder="Tên đăng nhập" />
                            </div>
                            <div className="form-group m-2 " >
                                <Field  name="email" className="form-control form-control-lg" type="email" placeholder="Email" />
                            </div>
                            <div className="form-group m-2">
                                <Field name="password" className="form-control form-control-lg" type="password" placeholder="Mật khẩu" />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p>Bạn đã có tài khoản? <NavLink to='/login'>Đăng nhập ngay</NavLink></p>
                                
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button disabled className="btn btn-lg btn-secondary m-3"><FaGoogle /><span> Google</span>
                                </button>
                                <button disabled className="btn btn-lg btn-primary m-3"><FaFacebook /><span> Facebook</span>

                                </button>

                            </div>
                            <div className='d-flex justify-content-center m-3'>
                            <button type="submit" className="btn btn-lg btn-dark ">Đăng ký</button>

                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Signup;