import React from 'react';
import '../styles/DisplayMenuD.scss';

const DisplayMenuD = () => {
  return (
    <div className="desktop-menu">
  <ul>
    <li>
      <a href="/myorders">My orders</a>
    </li>
    <li>
      <a href="/edit-account">My account</a>
    </li>
    <li>
      <a href="/">Sign out</a>
    </li>
  </ul>
</div>

  );
};

export default DisplayMenuD;
