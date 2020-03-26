import React, { Component } from 'react';
import {v4 as uuid4} from 'uuid';
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
// some comment
class App extends Component {
  state ={
    items:[{id:1,title:'wakeup'},{id:2,title:'breakfast'}],
    id:uuid4(),
    item:'',
    editItem:false
  };
  handleChange =(e)=>{
    console.log('handleChange');
  }
  handleSubmit =(e) =>{
    console.log('handleSubmit')
  }
  clearList = ()=>{
    console.log('clear list');
  }
  handleDelete = (id)=>{
    console.log(`handle delete ${id}`);
  }
  handleEdit =(id) =>{
    console.log(`handle edit ${id}`);
  }

  render() {
    
    
    return (
      <div >
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="Text-Capitalize text-center">todo input</h3>
              <TodoInput 
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
              >
              </TodoInput>
              <TodoList items={this.state.items} 
                        clearList={this.clearList}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}>

              </TodoList>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
