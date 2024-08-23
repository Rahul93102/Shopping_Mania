import React, { useState } from 'react';

function MyComponent() {
    const [car, setcar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });
// ...c used to save prev values of car and add to the curr val
    function handleYearChange(event) {
        setcar(c => ({ ...c, year: event.target.value }));
    }
    function handleMakeChange(event) {
        setcar(c => ({ ...c, make: event.target.value }));
    }
    function handleModelChange(event) {
        setcar(c => ({ ...c, model: event.target.value }));
    }

    return (
        <div>
            <p>Your Favourite Car: {car.year} {car.make} {car.model}</p>

            <input
                type="number"
                value={car.year}
                onChange={handleYearChange}
            /> <br />

            <input
                type="text"
                value={car.make}
                onChange={handleMakeChange}
            /> <br />

            <input
                type="text"
                value={car.model}
                onChange={handleModelChange}
            /> <br />
        </div>
    );
}

export default MyComponent;
