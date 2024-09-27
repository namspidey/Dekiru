import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Tree } from 'primereact/tree';
import { BsClockHistory } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const Study = () => {
    const [type, setType] = useState(1); // 1: Lý thuyết, 2: Video, 3: Trắc nghiệm
    const [activeNodeKey, setActiveNodeKey] = useState(null);
    const [contentData, setContentData] = useState(null); // State để lưu nội dung
    const location = useLocation();
    const navigate = useNavigate();
    const { courseWeeks } = location.state; // Nhận dữ liệu từ Course.js
    const [treeData, setTreeData] = useState([]);

    useEffect(() => {
        const fetchChaptersAndContents = async () => {
            const updatedTreeData = [];

            for (const week of courseWeeks) {
                const weekData = {
                    key: week.id,
                    label: week.title,
                    data: week,
                    children: []
                };

                try {
                    const chapterResponse = await axiosInstance.get(`/authen/course/get-all-course-chapter?id=${week.id}`);
                    if (chapterResponse.data.success) {
                        for (const chapter of chapterResponse.data.data) {
                            const chapterData = {
                                key: chapter.id,
                                label: chapter.title,
                                data: chapter,
                                children: []
                            };

                            const contentResponse = await axiosInstance.get(`/authen/course/get-list-content-by-chap-id?chapId=${chapter.id}`);
                            if (contentResponse.data.success) {
                                chapterData.children = contentResponse.data.data.map(content => ({
                                    key: content.id,
                                    label: content.title,
                                    data: content,
                                    contentType: content.contentType
                                }));
                            }

                            weekData.children.push(chapterData);
                        }
                    }
                } catch (error) {
                    console.error('Error fetching chapters or contents:', error);
                }

                updatedTreeData.push(weekData);
            }

            setTreeData(updatedTreeData);
        };

        fetchChaptersAndContents();
    }, [courseWeeks]);

    const nodeTemplate = (node) => {
        let icon;
        switch (node.data.contentType) {
            case 0:
                icon = <IoBookOutline />;
                break;
            case 1:
                icon = <MdOutlineQuiz />;
                break;
            case 2:
                icon = <PiVideo />;
                break;
            default:
                icon = null;
        }

        const isActive = activeNodeKey === node.key;

        return (
            <div
                className={`d-flex p-2 ps-3 align-items-center ${isActive ? 'study-active-node' : ''}`}
                onClick={() => handleNodeClick(node.data)} // Gọi hàm xử lý khi click
                style={{
                    cursor: 'pointer',
                    color: isActive ? 'black' : 'black'
                }}
            >
                <div className='me-3 node-ic'>
                    {icon}
                </div>
                <div>
                    <div>{node.label}</div>
                </div>
            </div>
        );
    };

    const handleNodeClick = async (content) => {
        setActiveNodeKey(content.key); // Cập nhật node đang hoạt động

        switch (content.contentType) {
            case 0: // Lý thuyết
                setContentData(content.description); // Giả sử content có trường description
                setType(1);
                break;
            case 1: // Trắc nghiệm
                try {
                    const response = await axiosInstance.get(`/authen/course/get-question-for-quiz?id=${content.id}`);
                    if (response.data.success) {
                        navigate('/quiz', { state: { questions: response.data.data } }); // Chuyển đến trang Quiz
                    } else {
                        console.error(response.data.message);
                    }
                } catch (error) {
                    console.error('Error fetching quiz questions:', error);
                }
                break;
            case 2: // Video
                setContentData(content.videoUrl); // Giả sử content có trường videoUrl
                setType(2);
                break;
            default:
                break;
        }
    };

    return (
        <div className='study'>
            <div className='p-3 bg-dark text-white ps-3 study-header'>
                <FaArrowLeft /> Tiếng Nhật sơ cấp
            </div>

            <div className='d-flex w-100'>
                <div className='col-3 bg-light border-end' style={{
                    position: 'sticky',
                    top: 0,
                    overflowY: 'auto',
                    height: '100vh'
                }}>
                    <Tree value={treeData} nodeTemplate={nodeTemplate} className="w-full" />
                </div>

                <div className='col-9 bg-white'>
                    <div className='p-2'>
                        {type === 1 && contentData && (
                            <div className='p-3'>
                                <h3>Lý thuyết</h3>
                                <div dangerouslySetInnerHTML={{ __html: contentData }} />
                            </div>
                        )}
                        {type === 2 && contentData && (
                            <div>
                                <h3 className='ps-5'>Video</h3>
                                <iframe className='ps-5' src={contentData} width="1080" height="600" allow="autoplay"></iframe>
                            </div>
                        )}
                        {type === 3 && (
                            <div className='ps-5'>
                                <h3 className=''>Trắc nghiệm</h3>
                                {/* Thêm nội dung cho phần trắc nghiệm */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;