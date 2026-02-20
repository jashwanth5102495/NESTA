import React from 'react';
import './StarBorder.css';

const StarBorder = ({
  as: As = 'div',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  style,
  ...rest
}) => {
  return React.createElement(
    As,
    {
      className: `star-border-container ${className}`,
      style: { padding: `${thickness}px 0`, ...(style || {}) },
      ...rest,
    },
    <>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </>
  );
};

export default StarBorder;
