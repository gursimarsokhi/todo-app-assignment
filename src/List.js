import React from "react";
import TodoForm from './TodoForm';
import Todo from './Todo';
import shortid from "shortid";
class List extends React.Component{
    constructor(){
        super();
         this.state = {todos: [{id : 1,content : "make breakfast"},{id : 2, content : "make coffee"}]};
    }
    deleteTodos = (id) => {
        console.log(id);
        const newTodoList = this.state.todos.filter(i => {
            return i.id !== id
        })
        this.setState({todos : newTodoList});
    }   
    addTodos = (t) =>{
    //function   
        t.id = shortid.generate();
        let todos = [t,...this.state.todos]
        //updatedTodos.push(t); 
        this.setState( {todos : todos}) //update todos state
    }
    toggleComplete = (id) => {

    }

    render(){
        return(
            <div className = "todo-app container">
                <h1 className = "center blue-text">Todo List</h1>
                <TodoForm onAdd = {this.addTodos}/>
                {<Todo data = {this.state.todos} deleteData = {this.deleteTodos} />}
            </div>
            
            
        
            
        );
    }
}
export default List;