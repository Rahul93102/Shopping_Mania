import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState('');
    const [paymentChange, setPaymentChange] = useState('');
    const [shipping, setShipping] = useState('');

    const updateName = (event) => {
        setName(event.target.value);
    }

    const updateAge = (e) => {
        setAge(e.target.value);
    }

    const updateComment = (e) => {
        setComment(e.target.value);
    }

    const updatePaymentChange = (e) => {
        setPaymentChange(e.target.value);
    }

    const updateShipping = (e) => {
        setShipping(e.target.value);
    }

    return (
        <div className="container">
            <style jsx>{`
                .container {
                    max-width: 400px;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    background-color: #f9f9f9;
                }
                .input-field, .textarea-field, .select-field {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                }
                .textarea-field {
                    resize: none;
                }
                p {
                    color: #333;
                    margin-bottom: 15px;
                    text-align: left;
                }
                label {
                    display: inline-block;
                    margin-right: 10px;
                }
                input[type="radio"] {
                    margin-right: 5px;
                }
            `}</style>
            <input className="input-field" value={name} onChange={updateName} placeholder="Enter your name" />
            <p>Name: {name}</p>

            <input className="input-field" value={age} onChange={updateAge} placeholder="Enter your age" type="number" />
            <p>Age: {age}</p>

            <textarea className="textarea-field" value={comment} onChange={updateComment} placeholder="Enter your comment"></textarea>
            <p>Comment: {comment}</p>

            <select className="select-field" value={paymentChange} onChange={updatePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Paytm">Paytm</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {paymentChange}</p>

            <label>
                <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={updateShipping} />
                Pickup
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={updateShipping} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent;
