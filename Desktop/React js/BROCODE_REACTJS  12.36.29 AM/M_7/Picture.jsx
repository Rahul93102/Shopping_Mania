import React from 'react';

function Picture() {
    const imageUrl = "./img.png"; // Relative path to the image file
    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Image description" />
    );
}

export default Picture;
