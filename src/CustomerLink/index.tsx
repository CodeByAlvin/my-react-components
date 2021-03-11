import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './style.css';

interface LinkProps {
  to: string,
}

const CustomerLink: React.FC<LinkProps> = (props) => {
  const match = useRouteMatch({ path: props.to });
  return (
    <Link to="/" className={match ? "active" : ""}>{props.children}</Link>
  )
};

export default CustomerLink;