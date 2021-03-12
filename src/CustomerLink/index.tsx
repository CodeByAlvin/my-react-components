import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './style.css';

interface LinkProps {
  to: string,
  exact: boolean,
}

const CustomerLink: React.FC<LinkProps> = (props) => {
  const match = useRouteMatch({ path: props.to, exact: props.exact });
  const cls = match ? "link active" : "link";

  return (
    <Link to={props.to} className={cls}>{props.children}</Link>
  )
};

export default CustomerLink;