import React,{useState} from 'react';
function MyComponent(){ 
    const [foods,setfoods] = useState(["Apple","Orange","Banana"]);

    function handleAddfood(){ 
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setfoods(f => [...f,newFood]);
        
    }

    function handleRemoveFood(index){ 
        setfoods(foods.filter((_,i ) => i !== index));
    }


    return (
        <div>
            <h2>List Of Foods </h2>
            <ul>
                {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}> {food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food Name" />
            <button onClick={handleAddfood}> Add Food</button>

        </div>
    );


}

export default MyComponent;