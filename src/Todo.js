import React from 'react';
import shortid from 'shortid';
const Todo = ({data,deleteData})=>{
    const list = data.length ? (
        data.map( (i) => <div key = {i.id} className = "collection-item">
            <span onClick = {() =>  deleteData(i.id)}>{i.content}</span>
        </div>)         
    ) : (<p className = "center">No item in the list</p>)
    return (
        <div className = "todos collection">{list}</div>
        );
}
export default Todo