import React from 'react';
import { useState } from 'react';

const avatarOptions = [
    { value: '1', label: 'Thông tin tài khoản' },
    { value: '2', label: 'Hồ sơ của tôi' },
    { value: '3', label: 'Bạn bè' },
    { value: '4', label: 'Lớp của tôi' },
    { value: '5', label: 'Lịch sử thanh toán' },
    { value: '6', label: 'Thoát' }
];

const AvatarDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const handleSelectAvatar = (avatar) => {
        setSelectedAvatar(avatar);
        setDropdownOpen(false);
    };

    return (
        <div className="avatar-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src='ava.jfif' width={40} height={40} className='rounded-circle me-2' alt='avatar' />
            {isDropdownOpen && (
                <div className="dropdown">
                    {avatarOptions.map((avatar) => (
                        <div
                            key={avatar.value}
                            className="dropdown-option"
                            onClick={() => handleSelectAvatar(avatar)}
                        >
                            <span className='p-1'>{avatar.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvatarDropdown;
