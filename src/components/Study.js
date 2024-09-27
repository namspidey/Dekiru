import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Tree } from 'primereact/tree';
import { BsClockHistory } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";
import { PiVideo } from "react-icons/pi";

const Study = () => {
    const [type, setType] = useState(1); // 1: Lý thuyết, 2: Video, 3: Trắc nghiệm
    const [activeNodeKey, setActiveNodeKey] = useState(null);


    // Cấu trúc data với trường type
    const data = [
        {
            key: '0',
            label: 'Documents1',
            data: 'Documents Folder',
            children: [
                {
                    key: '0-0',
                    label: '',
                    data: { name: 'Bài 1', time: '30 phút', type: 1 }, // type: 1 - Lý thuyết
                    children: []
                },
                {
                    key: '0-1',
                    label: '',
                    data: { name: 'Bài 2', time: '25 phút', type: 2 }, // type: 2 - Video
                    children: []
                },
                {
                    key: '0-2',
                    label: '',
                    data: { name: 'Bài 3', time: '45 phút', type: 3 }, // type: 3 - Trắc nghiệm
                    children: []
                }
            ]
        },
        {
            key: '1',
            label: 'Documents2',
            data: 'Documents Folder',
            children: [
                {
                    key: '1-0',
                    label: '',
                    data: { name: 'Bài 4', time: '30 phút', type: 1 },
                    children: []
                },
                {
                    key: '1-1',
                    label: '',
                    data: { name: 'Bài 5', time: '25 phút', type: 2 },
                    children: []
                },
                {
                    key: '1-2',
                    label: '',
                    data: { name: 'Bài 6', time: '45 phút', type: 3 },
                    children: []
                }
            ]
        }
    ];

    // Hàm nodeTemplate để tùy chỉnh giao diện node
    const nodeTemplate = (node, options) => {
        const isActive = node.key === activeNodeKey; // Kiểm tra xem node có đang active không
        let icon;

        // Chọn biểu tượng dựa trên loại của node
        switch (node.data.type) {
            case 1:
                icon = <IoBookOutline />;
                break;
            case 2:
                icon = <PiVideo />;
                break;
            case 3:
                icon = <MdOutlineQuiz />;
                break;
            default:
                icon = null; // Không có biểu tượng nếu không khớp với loại
        }

        return (
            <div
                className={`d-flex p-2 ps-3 align-items-center ${isActive ? 'study-active-node' : ''}`}
                onClick={() => handleNodeClick(node.data.type, node.key)} // Gọi hàm xử lý khi click
                style={{
                    cursor: 'pointer',
                    color: isActive ? 'black' : 'black' // Thay đổi màu chữ khi active
                }}
            >
                <div className='me-3 node-ic'>
                    {icon} {/* Hiển thị biểu tượng tương ứng */}
                </div>
                <div >
                    <div>{node.label}</div>
                    <div className='flex-grow-1'>
                        <p className='p-0 m-0'>{node.data.name}</p>
                        <p className='p-0 m-0'>{node.data.time}</p>
                    </div>
                </div>
            </div>
        );
    };
    // Hàm xử lý khi người dùng click vào một node
    const handleNodeClick = (nodeType, nodeKey) => {
        setType(nodeType); // Cập nhật type dựa trên giá trị của node được click
        setActiveNodeKey(nodeKey);
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
                    {/* Tree component với nodeTemplate */}
                    <Tree value={data} nodeTemplate={nodeTemplate} className="w-full" />
                </div>

                <div className='col-9 bg-white'>
                    <div className='p-2'>
                        {/* Render nội dung dựa trên type */}
                        {type === 1 && (
                            <div className='p-3'>
                                <h3>Lý thuyết</h3>
                                <p>Chú thuật hồi chiến (呪術廻戦じゅしゅつかいせん Jujutsu kaisen?) là một bộ truyện tranh Nhật Bản được sáng tác và minh họa bởi Akutami Gege, đăng trên tạp chí Weekly Shōnen Jump của Shueisha kể từ tháng 3 năm 2018. Truyện được phát hành bởi Shueisha và đã có 27 tập truyện được xuất bản tính đến tháng 7 năm 2024. Câu chuyện theo chân Itadori Yuji, một nam sinh trung học bí mật tham gia vào tổ chức Chú thuật sư với tham vọng tiêu diệt một nguyền hồn hùng mạnh tên Ryoumen Sukuna. Chú thuật hồi chiến là câu chuyện nối tiếp tác phẩm trước của Akutami, Jujutsu Kaisen 0: Tokyo Toritsu Jujutsu Koutou Senmon Gakkou (Chú thuật hồi chiến 0: Trường Chuyên Chú Thuật Tokyo). Một bản chuyển thể anime do MAPPA sản xuất đã phát sóng mùa đầu tiên trên truyền hình từ tháng 10 năm 2020 đến tháng 3 năm 2021; mùa thứ hai dự kiến lên sóng vào năm 2023. Tại Việt Nam, bản quyền anime được quản lý bởi Medialink và phân phối cho các nền tảng iQiyi Việt Nam, TrueID Việt Nam, DANET, FPT Play và VieON phát hành kèm phụ đề tiếng Việt.[3]

                                    Chú thuật hồi chiến được Viz Media mua bản quyền và phát hành bản tiếng Anh tại khu vực Bắc Mĩ. Tại Việt Nam, tác phẩm đã được Nhà xuất bản Kim Đồng mua bản quyền. Hai phiên bản tiểu thuyết của bộ truyện do Kitaguni Ballad sáng tác được phát hành vào tháng 5 2019 và tháng 1 năm 2020.

                                    Tính đến tháng 5 năm 2021, Chú thuật hồi chiến được ghi nhận bán ra hơn 50 triệu bản manga, bao gồm cả bản kỹ thuật số và trở thành một trong những bộ manga bán chạy nhất.</p>
                            </div>
                        )}
                        {type === 2 && (
                            <div>
                                <h3 className='ps-5'>Video</h3>
                                <iframe className='ps-5' src="https://drive.google.com/file/d/1iqnulJ7QNHjArpzVhZdXC242l7NglLKc/preview" width="1080" height="600" allow="autoplay"></iframe>
                            </div>
                        )}
                        {type === 3 && (
                            <div className='ps-5'>
                                <h3 className=''>Trắc nghiệm</h3>
                                <div className='mt-3 d-flex'>
                                    <div className='d-flex align-items-center me-5'>
                                        <BsClockHistory className='me-1' />
                                        20 phút
                                    </div>

                                    <div className='d-flex align-items-center me-5'>
                                        <FaRegCircleQuestion className='me-1' />
                                        20 Câu hỏi
                                    </div>

                                    <div className='d-flex align-items-center me-5'>
                                        <FaPencil className='me-1' />
                                        Không dưới hạn lượt làm lại
                                    </div>
                                </div>
                                <div className='pt-3 d-flex'>
                                    <button className='btn btn-lg btn-primary ms-auto me-5'>Làm bài</button>
                                </div>
                                <div className='d-flex w-100 p-3 border-top border-bottom mt-3'>
                                    <div className='col-6 border-end'>
                                        <h5>Điểm đạt</h5>
                                        <h1>80%</h1>
                                    </div>
                                    <div className='col-6 p-3'>
                                        <h5>Điểm của bạn</h5>
                                        <h1>--</h1>
                                    </div>
                                </div>
                                <div className='mt-3 table-container'>
                                    <h4>Lịch sử làm bài</h4>
                                    <table className='mt-2 table-full border '>

                                        <thead className='border-bottom bg-light'>
                                            <tr>
                                                <th className='p-2'>STT</th>
                                                <th>Điểm(%)</th>
                                                <th>Thời gian bắt đầu</th>
                                                <th>Thời gian(phút)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='border-bottom'>
                                                <td className='p-2'>1</td>
                                                <td>70</td>
                                                <td>12:00</td>
                                                <td>12:00</td>
                                            </tr>
                                            <tr>
                                            <td colSpan="4" className="text-center p-3">Không có dữ liệu</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Study;
