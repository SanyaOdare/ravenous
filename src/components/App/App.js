import React from 'react';
import './App.css';
import Business from './components/Business/Business'
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <Business />
        <SearchBar />
        <BusinessList />
      </div>      
    );
  }
}

export default App;
