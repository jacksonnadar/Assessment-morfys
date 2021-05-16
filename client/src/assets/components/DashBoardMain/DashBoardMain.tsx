import React from 'react';

import ColumnComponent from './ColumnComponent/ColumnComponent';
import './DashBoardMain.scss';
import img1 from '../../images/png/img1.png';
import img2 from '../../images/png/img2.png';
import img3 from '../../images/png/img3.png';
import img4 from '../../images/png/img4.png';
interface Props {}
const column2Data = [
  {
    title: 'Paragon One',
    subTitle: 'Creative thinking, +3 more',
    img: img1,
  },
  {
    title: 'Classcraft',
    subTitle: 'Writing composition, +1 more',
    img: img2,
  },
  {
    title: 'ReadToMe',
    subTitle: 'Experimental Learning, +2 more',
    img: img3,
  },
  {
    title: 'Discovery Education',
    subTitle: 'Creative thinking, +10 more',
    img: img4,
  },
];
const DashBoardmain: React.FC<Props> = () => {
  return (
    <div className="DashBoardMain">
      <ColumnComponent title="Impact Campaigns" bottomText="Start New Campaign">
        <div className="column1-card"></div>
        <div className="column1-card"></div>
      </ColumnComponent>
      <ColumnComponent title="Learning Tools" bottomText="Add New tool">
        {column2Data.map((data, i) => {
          return (
            <div className="column2-card">
              <div className="icon">
                <img src={data.img} alt="" />
              </div>
              <div className="card-texts">
                <h3>{data.title}</h3>
                <p>{data.subTitle}</p>
              </div>
            </div>
          );
        })}
      </ColumnComponent>
      <ColumnComponent
        title="Design Learning Pods"
        bottomText="New Learning Pod"
      ></ColumnComponent>
    </div>
  );
};

export default DashBoardmain;
