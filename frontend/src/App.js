import React from 'react';
import Header from './components/Header';
//import SearchBar from './components/SearchBar';
import ScrapeForm from './components/ScrapeForm';
import './App.css';


class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div className="ui container segment">
          <ScrapeForm />
        </div>
    </div>
    );
  }
}
export default App;
