import React from 'react';
import Logo from '../Images/logo.png';


export default function Header() {
  return (
        
    <div>
      <div className="logo"><img src={ Logo }></img></div>
      <h1>Number Memory Test</h1>
    </div>
    )
}