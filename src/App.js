import React, { Component } from "react";
import logo from './bike.png';
import './App.css';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      newItem: "",
      list: []
    }
  }


  addItem(valee)
  {
    if(valee!=="")
    {
      const newItem={
        id:Date.now(),
        value:valee,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState(
        {
          list,
          newItem:""
        }
      );
    }
  }


deleteItem(id)
{
  const list=[...this.state.list];
  const updatedlist = list.filter(item => item.id !== id);
  this.setState(
    {
      list:updatedlist
    }
  );
}

updateInput(input)
{
  this.setState(
    {
      newItem:input
    }
  );
}
  render()
  {
    return(
      <div className="App">
      <img src={logo} className="logo" width="100" height="100"/>
      <h1 className="app-title">New application</h1>
      <div className="container">
        add an  item ...<br/>
        <input 
        
        type="text" className="input-text" placeholder="name"
        required
        value={this.state.newItem}
        onChange={e => this.updateInput(e.target.value)}
        />
        
        <button type="submit" className="add-btn"
        onClick={() => this.addItem(this.state.newItem)}
        disabled={!this.state.newItem.length}
        
        >Click me</button>
        <div className="list">
          <ul>
            {this.state.list.map(item => {

              return(
                <li key={item.id}>
                  <input
                  type="checkbox"
                  name="done"
                  checked={item.isDone}
                  onChange={() => {}}
                  />
                  {
                    item.value
                  }
                  <button
                  className="btn"
                  onClick={() => this.deleteItem(item.id)}
                  >
                    delete
                  </button>
                </li>
              );
            })}
            <li>
              <input type="checkbox" className="check"/>
              creating new application<br/>
              <button className="btn"> click me to continue</button>
                
            </li>
          </ul>
        </div>
      </div>
    </div>

    );
  }
}



/*function App()
{
  return(<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo"/>
    </header>
    </div>

  );
}*/

export default App;
