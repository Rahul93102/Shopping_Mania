// declare as list  function List(){ 
//     const fruits = ["apple","orange","papapaya","coconut","banana"];
//     const listItems = fruits.map(fruit => <li> {fruit}</li>)

//     return (
//         <ol>{listItems}</ol>
//     )
// }


function List(props){ 
    // const fruits = [{id:1 , name : "apple",calories:92},
    //                 {id:2 , name:"orange",calories:91},
    //                 {id:3 , name: "papapaya",calories:31},
    //                 {id:4 , name:"coconut",calories:43},
    //                 {id:5 , name:"banana",calories:123}];

    // sort alphabetically
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    //reverse alphabetically
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    // fruits.sort((a,b) => a.calories - b.calories); // sort numerically where reverse a && b in calories to reverse sort
    

    // const lowcals = fruits.filter(fruit => fruit.calories < 40);


    // const listItems = fruits.map(fruit => <li key = {fruit.id} > {fruit.name} :  &nbsp;
    //                                         <b>{fruit.calories}</b></li>)
    const itemlist = props.items;
    const category = props.category;
    const listItems = itemlist.map(item => <li key = {item.id} > {item.name} :  &nbsp;
                                          <b>{item.calories}</b></li>)

    return (
        <>
        {/* <ol>{listItems}</ol> */}
        <h3>{category}</h3>
        <ol>{listItems}</ol>

        </>

    );
}
export default List;    