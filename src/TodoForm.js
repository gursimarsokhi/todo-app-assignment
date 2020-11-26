import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {content : ''};
    }
    handleChange = event => {
        console.log(event.target.name);
        const target = event.target;
        const name = event.target.name;
        let message;
        if(!target.value){
            message = `${name} cannot be empty`;
        }
        this.setState({content:event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.content)
        this.props.onAdd(this.state);
    }
    render(){
        return(<div>
            <form onSubmit = {this.handleSubmit}>
                <label>Enter list item here:</label>
                <input type = "text" onChange = {this.handleChange}/>
                <button>Submit</button>
            </form>
        </div>)
    }
}

export default TodoForm