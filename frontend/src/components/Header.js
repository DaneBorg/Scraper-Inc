import React from 'react';
import NavBar from './NavBar.js';

export default class Header extends React.Component {
    render() {
    return (
        <div className="ui container">
            <h2>Custom Web Scraper</h2>
            <br />
            <NavBar />
            <hr />
        </div>
    )};
};

