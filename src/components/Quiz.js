import React from 'react';

const Quiz = () => {
    return (
        <div className='quiz'>
            <div className='d-flex w-100 bg-light ' style={{ height: '90vh' }}>
                <div className='col-9 p-3 ' style={{  overflowY: 'auto' }}>
                    <div className='ques-item bg-white p-5 m-4'>
                        <p>1. Câu hỏi 1</p>
                        <p>Nội dung...?</p>
                        <div className='ans'>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>

                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2'name='ques' />
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                        </div>
                    </div>

                    <div className='ques-item bg-white p-5 m-4'>
                        <p>1. Câu hỏi 1</p>
                        <p>Nội dung...?</p>
                        <div className='ans'>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>

                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2'name='ques' />
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                        </div>
                    </div>

                    <div className='ques-item bg-white p-5 m-4'>
                        <p>1. Câu hỏi 1</p>
                        <p>Nội dung...?</p>
                        <div className='ans'>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>

                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2' name='ques'/>
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                            <div className='ans-item d-flex align-items-center'>
                                <input type='radio' className='me-2'name='ques' />
                                <p className='mb-0'>A. nrjkgrjn</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className='col-3 bg-white'>
                    <div className='p-5 d-flex justify-content-center align-items-center'>
                        <h1>00:00:00</h1>
                    </div>
                    <div className='m-3 d-flex'>
                        <p className=''>Thời gian: 10 phút</p>
                        <p className='ms-auto'>Tổng: 10 câu</p>
                    </div>
                    <div className='p-3'>
                        <span className='m-1 p-2 bg-light rounded border border-2 '>1</span>
                        <span className='m-1 p-2 bg-light rounded border border-2 '>2</span>
                        <span className='m-1 p-2 bg-light rounded border border-2 '>3</span>
                        <span className='m-1 p-2 bg-light rounded border border-2 '>4</span>

                    </div>

                    <div className='d-flex justify-content-center m-5'>
                        <button className='btn btn-primary'>Nộp bài</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;