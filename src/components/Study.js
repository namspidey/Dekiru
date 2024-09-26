import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { Tree } from 'primereact/tree';
const Study = () => {
    const data = [{
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
            {
                key: '0-0',
                label: 'Work',
                data: 'Work Folder',
                icon: 'pi pi-fw pi-cog',
                children: [
                    { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                    { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                ]
            },
            {
                key: '0-1',
                label: 'Home',
                data: 'Home Folder',
                icon: 'pi pi-fw pi-home',
                children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
            }
        ]
    }]
    const [nodes, setNodes] = useState(data);
    return (
        <div className='study'>
            <div className='p-2 bg-dark text-white ps-3'>
                <FaArrowLeft /> Tieeengss Nhật sơ câps

            </div>
            <div className="card flex justify-content-center">
                    <Tree value={nodes} className="w-full md:w-30rem" />
                </div>
            <div className='d-flex w-100'>
                
                <div className='col-3 bg-light' style={{ overflowY: 'auto' }}>
                    <div className='d-flex p-2 border-bottom border-dark ps-3'>
                        <div></div>
                        <div className='flex-grow-1'>
                            <p className='p-0 m-0'>Bài 1</p>
                            <p className='p-0 m-0'>30 phút</p>
                        </div>
                        <input type='checkbox' className='ms-auto custom-checkbox' />
                    </div>

                    <div className='d-flex p-2 border-bottom border-dark ps-3'>
                        <div></div>
                        <div className='flex-grow-1'>
                            <p className='p-0 m-0'>Bài 1</p>
                            <p className='p-0 m-0'>30 phút</p>
                        </div>
                        <input type='checkbox' className='ms-auto custom-checkbox' />
                    </div>

                    <div className='d-flex p-2 border-bottom border-dark ps-3'>
                        <div></div>
                        <div className='flex-grow-1'>
                            <p className='p-0 m-0'>Bài 1</p>
                            <p className='p-0 m-0'>30 phút</p>
                        </div>
                        <input type='checkbox' className='ms-auto custom-checkbox' />
                    </div>

                </div>
                <div className='col-9 bg-white'>
                    <div className='p-2'>
                        <div className='me-3'><FaClock /> 10 phút
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='p-2 ps-5 pe-5'>
                        <h3>Lý thuyết</h3>
                        <p>Chú thuật hồi chiến (呪術廻戦じゅしゅつかいせん Jujutsu kaisen?) là một bộ truyện tranh Nhật Bản được sáng tác và minh họa bởi Akutami Gege, đăng trên tạp chí Weekly Shōnen Jump của Shueisha kể từ tháng 3 năm 2018. Truyện được phát hành bởi Shueisha và đã có 27 tập truyện được xuất bản tính đến tháng 7 năm 2024. Câu chuyện theo chân Itadori Yuji, một nam sinh trung học bí mật tham gia vào tổ chức Chú thuật sư với tham vọng tiêu diệt một nguyền hồn hùng mạnh tên Ryoumen Sukuna. Chú thuật hồi chiến là câu chuyện nối tiếp tác phẩm trước của Akutami, Jujutsu Kaisen 0: Tokyo Toritsu Jujutsu Koutou Senmon Gakkou (Chú thuật hồi chiến 0: Trường Chuyên Chú Thuật Tokyo). Một bản chuyển thể anime do MAPPA sản xuất đã phát sóng mùa đầu tiên trên truyền hình từ tháng 10 năm 2020 đến tháng 3 năm 2021; mùa thứ hai dự kiến lên sóng vào năm 2023. Tại Việt Nam, bản quyền anime được quản lý bởi Medialink và phân phối cho các nền tảng iQiyi Việt Nam, TrueID Việt Nam, DANET, FPT Play và VieON phát hành kèm phụ đề tiếng Việt.[3]

                            Chú thuật hồi chiến được Viz Media mua bản quyền và phát hành bản tiếng Anh tại khu vực Bắc Mĩ. Tại Việt Nam, tác phẩm đã được Nhà xuất bản Kim Đồng mua bản quyền. Hai phiên bản tiểu thuyết của bộ truyện do Kitaguni Ballad sáng tác được phát hành vào tháng 5 2019 và tháng 1 năm 2020.

                            Tính đến tháng 5 năm 2021, Chú thuật hồi chiến được ghi nhận bán ra hơn 50 triệu bản manga, bao gồm cả bản kỹ thuật số và trở thành một trong những bộ manga bán chạy nhất.</p>
                    </div>

                    <div className='p-2  pe-5'>
                        <h3 className='ps-5'>Video</h3>
                        <iframe src="https://drive.google.com/file/d/1iqnulJ7QNHjArpzVhZdXC242l7NglLKc/preview" width="1080" height="630" allow="autoplay"></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Study;