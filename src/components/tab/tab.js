import React from 'react';
import './tab.css';

const Tab = ({tab}) => {
  return (
    <li className='tab-container'>
      <button>{tab}</button>
    </li>
  )
}

export default Tab;