import React, { Component } from 'react';
import contacts from './data/contacts.json';
import './App.css';
import Table from './components/Table';
import Contact from './components/Contact.js';


const appStyle = {
  display: 'grid',
  justifyItems: 'center'
}

class App extends Component {

  state = {
    contactsList: contacts.slice(0, 5)
  }

  handleRandom = () => {
    let random;
    let inList = true;

    while(inList){
      random = contacts[Math.floor(Math.random() * contacts.length)];
      inList = false;
      this.state.contactsList.forEach(e=>{
        if(e.name === random.name){
          inList = true;
        }
      });
      
    }
    this.setState({
      contactsList: [random, ...this.state.contactsList]
    })
  }

  handleSortName = () => {
    let sortedList = [...this.state.contactsList];
    sortedList = sortedList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.setState({
      contactsList: sortedList
    })
  }

  handleSortPopularity = () => {
    let sortedList = [...this.state.contactsList];
    sortedList = sortedList.sort((a, b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
    this.setState({
      contactsList: sortedList
    })
  }

  handleDelete = (index) => {
    let sortedList = [...this.state.contactsList];
    sortedList.splice(index, 1)
    this.setState({
      contactsList: sortedList
    })
  }

  renderContacts() {
    return this.state.contactsList.map((item, index) => {
      return <Contact
        index={index}
        width='100px'
        picture={item.pictureUrl}
        name={item.name}
        popularity={item.popularity}
        delete={this.handleDelete}
      />
    });
  }
  render() {
    return (
      <div style={appStyle}>
        <h1>Ironcontacts</h1>
        <div>
          <button onClick={this.handleRandom}>Add Random Contact</button>
          <button onClick={this.handleSortName}>Sort by name</button>
          <button onClick={this.handleSortPopularity}>Sort by popularity</button>
        </div>
        <Table>
          {this.renderContacts()}
        </Table>
      </div>

    );
  }
}

export default App;
