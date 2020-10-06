import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/phrases"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Phrases</NavLink>
        <NavLink
          to="/tutors"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Tutors</NavLink>
        </header>
      </div>
    )
  }
}

export default Navbar;