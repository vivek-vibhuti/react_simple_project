import React, { useState, useEffect } from 'react';

const Navbar = () => {
    // State to hold the selected color
    const [selectedColor, setSelectedColor] = useState('bg-white'); // Default color

    // Color options
    const colors = [
        { name: 'blue', bgColor: 'bg-blue-500' },
        { name: 'orange', bgColor: 'bg-orange-500' },
        { name: 'red', bgColor: 'bg-red-500' },
        { name: 'white', bgColor: 'bg-white text-black' },
        { name: 'pink', bgColor: 'bg-pink-500' },
        { name: 'lavender', bgColor: 'bg-purple-500' },
        { name: 'violet', bgColor: 'bg-violet-500' },
    ];

    // Update the body background color whenever selectedColor changes
    useEffect(() => {
        // Get the color class without the 'bg-' prefix to apply directly to the body
        document.body.className = selectedColor;
    }, [selectedColor]);

    return (
        <div className="flex p-4 mt-10 bg-gray-100 rounded justify-evenly">
            {colors.map((color) => (
                <span
                    key={color.name}
                    className={`px-5 py-3 rounded-full cursor-pointer bg-gray-300 hover:bg-gray-200 ${selectedColor === color.bgColor ? 'ring-2 ring-gray-300' : ''}`}
                    onClick={() => setSelectedColor(color.bgColor)}
                >
                    {color.name}
                </span>
            ))}
        </div>
    );
};

export default Navbar;
