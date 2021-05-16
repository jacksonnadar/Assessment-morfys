import React from 'react';

import './ColumnComponent.scss';
import tripleDot from '../../../images/svg/threeDot.svg';
import addCircle from '../../../images/svg/Add-circle.svg';
interface Props {
  title: string;
  bottomText: string;
}

const ColumnComponent: React.FC<Props> = ({ title, bottomText, children }) => {
  const childrenArr = React.Children.toArray(children);

  return (
    <div className="ColumnComponent">
      <div className="column-title">
        <h3>{title}</h3>

        <div className="svgs">
          <img src={addCircle} alt="" />
          <img src={tripleDot} alt="" />
        </div>
      </div>
      <div
        className={
          childrenArr.length ? 'container' : 'container container--empty'
        }
      >
        <div className="children-container">{children}</div>
        <div className="bottom-text">
          <div className="bottom-text__container">
            <img src={addCircle} alt="" />
            <p>{bottomText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnComponent;
