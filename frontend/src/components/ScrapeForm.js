import React from 'react';
import SearchBar from './SearchBar';


export default class ScrapeForm extends React.Component {
    render() {
    return (
        <div>
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar />
            </div>
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar />
                <button class="ui button">Submit</button>
            </div>
        </div>
    )};
};

