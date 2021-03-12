import React from 'react';
import './style.css';


interface ButtonProps {
  size?: 'large' | 'middle' | 'small';
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { size = 'middle', children = 'button' } = props;
  const cls = `button-${size}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  return (
    <button onClick={handleClick} className={cls}>{children}</button>
  )
};

export default Button;