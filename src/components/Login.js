import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Quiz = () => {
    const location = useLocation();
    const { questions, quizId } = location.state || { questions: [], quizId: 0 }; // Nhận dữ liệu từ Study.js

    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(300); // 5 phút = 300 giây
    const [startTime] = useState(Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0) {
                    clearInterval(timer);
                    handleSubmit(); // Tự động nộp bài khi hết thời gian
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSelectAnswer = (quesIndex, ansId) => {
        setAnswers(prev => ({
            ...prev,
            [quesIndex]: ansId
        }));
    };

    const handleSubmit = async () => {
        let calculatedScore = 0;

        questions.forEach((question, index) => {
            const userAnswer = answers[index]; // Đáp án người dùng chọn
            const correctAnswer = question.answers.find(ans => ans.isCorrect); // Đáp án đúng

            if (userAnswer === correctAnswer.id) {
                calculatedScore += 10; // +10 điểm nếu đáp án đúng
            }
        });

        setScore(calculatedScore);
        
        // Tính toán thời gian đã làm
        const timeSpent = Math.floor((Date.now() - startTime) / 1000); // Thời gian đã làm tính bằng giây

        // Gửi dữ liệu lên API
        await saveScore(quizId, calculatedScore, timeSpent);

        alert(`Bạn đã hoàn thành bài quiz!\nĐiểm: ${calculatedScore}\nThời gian đã làm: ${timeSpent} giây`);
    };

    const saveScore = async (quizId, score, time) => {
        const data = {
            actionBy: 0, // Mặc định
            quizId: quizId,
            score: score,
            time: time
        };

        try {
            const response = await fetch('/authen/course/save-score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to save score');
            }

            const result = await response.json();
            console.log('Score saved successfully:', result);
        } catch (error) {
            console.error('Error saving score:', error);
        }
    };

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
                                        <input 
                                            type='radio' 
                                            className='me-2' 
                                            name={`ques${index}`} 
                                            onChange={() => handleSelectAnswer(index, answer.id)}
                                        />
                                        <p className='mb-0'>{answer.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='col-3 bg-white'>
                    <div className='m-3 d-flex'>
                        <p className=''>Thời gian còn lại: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</p>
                        <p className='ms-auto'>Tổng: {questions.length} câu</p>
                    </div>
                    <div className='p-3'>
                        {questions.map((_, index) => (
                            <span key={index} className='m-1 p-2 bg-light rounded border border-2'>{index + 1}</span>
                        ))}
                    </div>
                    <div className='d-flex justify-content-center m-5'>
                        <button className='btn btn-primary' onClick={handleSubmit}>Nộp bài</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
