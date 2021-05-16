import React from 'react';

import DashBoardSideBar from '../../assets/components/DashBoardSideBar/DashBoardSideBar';
import DashBoardHeader from '../../assets/components/DashBoardHeader/DashBoardHeader';
import DashBoardMain from '../../assets/components/DashBoardMain/DashBoardMain';
import './DashBoard.scss';
interface Props {}

const DashBoard: React.FC<Props> = () => {
  return (
    <div className="DashBoard">
      <DashBoardSideBar />
      <main>
        <DashBoardHeader />
        <DashBoardMain />
      </main>
    </div>
  );
};

export default DashBoard;
