import React, {PropTypes} from "react";
import {Link} from "react-router";

const Navigation = (props, context) => {
  return (
    <nav>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;