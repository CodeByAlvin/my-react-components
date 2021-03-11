
import React from 'react';
import CustomerLink from '../CustomerLink';
import routes from '../routes';
import './style.css';

const MyBoard: React.FC = () => {
  return (
    <ul className='my-sider'>
      {
        routes.map((item) => <CustomerLink key={item.path} to={item.path}>{item.title}</CustomerLink>)
      }
    </ul>
  )
};

export default MyBoard;