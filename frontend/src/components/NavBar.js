import React from 'react';

export default class NavBar extends React.Component {
  render() {
    const pages = ['home', 'about', 'contact', 'sign in', 'sign up'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
};