import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const link = {
  width: '1px',
  padding: '19px',
  margin: '0 9px 6px',
  background: 'beige',
  textDecoration: 'none',
  color: 'black',
  paddingTop: "10px",
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src="https://image.flaticon.com/icons/png/512/1377/1377974.png" />
          <nav>
            <ul>
              <li><NavLink to="/">🏠 Home</NavLink></li>
              <li><NavLink to="/phrases">Phrases</NavLink></li>
              <li><NavLink to="/tutors">Tutors</NavLink></li>
              <li><NavLink to="/categories">Categories</NavLink></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Navbar;