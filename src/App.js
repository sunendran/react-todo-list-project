import React, { Component } from 'react';
import {v4 as uuid4} from 'uuid';
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
// some comment
class App extends Component {
  state ={
    items:[],
    id:uuid4(),
    item:'',
    editItemm:true
  };
  handleChange =(e)=>{
    
    this.setState({
      item: e.target.value
      
    })
    
  }
  handleSubmit =(e) =>{
    e.preventDefault();
    const newItem ={
      id: this.state.id,
      title:this.state.item
    }
    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid4(),
      editItemm:false
    },()=> console.log(this.state))
  }
  clearList = ()=>{
    // console.log('clear list');
    this.setState({
      items: []
    })
  }
  handleDelete = (id)=>{
    // console.log(`handle delete ${id}`);
    const filterdItems = this.state.items.filter((item)=>item.id !== id);
    this.setState({
      items: filterdItems
    });
  }
  handleEdit =(id) =>{
    //  console.log(`handle edit ${id}`);
    const filterdItems = this.state.items.filter((item)=>item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id );
    this.setState({
      items: filterdItems,
      item: selectedItem.title,
      id: id,
      editItemm:true
    });
    
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
              editItemm={this.editItemm}
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
