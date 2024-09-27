import React from 'react';
import { useLocation } from 'react-router-dom';

const Quiz = () => {
    const location = useLocation();
    const { questions, duration } = location.state; // Nhận dữ liệu từ Study.js

    return (
        <div className='quiz'>
            <div className='d-flex w-100 bg-light' style={{ height: '90vh' }}>
                <div className='col-9 p-3' style={{ overflowY: 'auto' }}>
                    {questions.map((question, index) => (
                        <div key={index} className='ques-item bg-white p-5 m-4'>
                            <p>{index + 1}. <span dangerouslySetInnerHTML={{ __html: question.question.content }} /></p>
                            <div className='ans'>
                                {question.answers.map((answer, ansIndex) => (
                                    <div key={ansIndex} className='ans-item d-flex align-items-center'>
                                        <input type='radio' className='me-2' name={`ques${index}`} />
                                        <p className='mb-0'>{answer.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='col-3 bg-white'>
                    <div className='p-5 d-flex justify-content-center align-items-center'>
                        <h1>{duration ? new Date(duration * 1000).toISOString().substr(11, 8) : "00:00:00"}</h1> {/* Chuyển đổi duration thành định dạng HH:MM:SS */}
                    </div>
                    <div className='m-3 d-flex'>
                        <p className=''>Thời gian: {duration / 60} phút</p>
                        <p className='ms-auto'>Tổng: {questions.length} câu</p>
                    </div>
                    <div className='p-3'>
                        {questions.map((_, index) => (
                            <span key={index} className='m-1 p-2 bg-light rounded border border-2'>{index + 1}</span>
                        ))}
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