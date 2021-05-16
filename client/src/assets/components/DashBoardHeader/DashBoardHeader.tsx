import React from 'react';

import './DashBoardHeader.scss';
import subLogo from '../../images/png/subLogo.png';
interface Props {}

const DashBoardHeader: React.FC<Props> = () => {
  const options = ['Discover', 'Impact Board', 'Learning Pods'];
  return (
    <div className="DashBoardHeader">
      <div className="sub-logo">
        <img src={subLogo} alt="" />
      </div>
      <div className="texts">
        <h1 className="title">Shenzhen Houde Academy</h1>
        <div className="options">
          {options.map((option) => (
            <p key={option} className="option">
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
