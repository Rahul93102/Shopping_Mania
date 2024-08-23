import React, { useState } from 'react';

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function updateColor(e) {
        setColor(e.target.value);
    }

    return (
        <div className="color-picker-container">
            <style jsx>{`
                .color-picker-container {
                    max-width: 300px;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    background-color: #f9f9f9;
                    text-align: center;
                }
                .color-display {
                    margin: 20px 0;
                    padding: 20px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                }
                h1 {
                    margin-bottom: 20px;
                    color: #333;
                }
                p {
                    margin: 0;
                    color: #333;
                }
                input[type="color"] {
                    padding: 5px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    cursor: pointer;
                }
            `}</style>
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={updateColor} />
        </div>
    );
}

export default ColorPicker;
