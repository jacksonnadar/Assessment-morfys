import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoardSideBar.scss';
import settingsSvg from '../../images/svg/Settings.svg';
import SignOutSvg from '../../images/svg/Sign-out.svg';
import logo from '../../images/svg/logo.svg';
import lab from '../../images/svg/Lab-flask.svg';
import home from '../../images/svg/Home.svg';
import inbox from '../../images/svg/inbox.svg';
import myTeam from '../../images/svg/Add-circle.svg';
import hamMenu from '../../images/svg/ham-menu.svg';
interface Props {}

// normally the data would have been featched from database
const teamMeamber = [
  { name: 'Patricia M.', post: 'Teacher' },
  { name: 'Liu Yangdong', post: 'Principal' },
  { name: 'Paul Literi', post: 'Counselor' },
  { name: 'Chen Ying', post: 'Counselor' },
  { name: 'Justin S.', post: 'Teacher' },
  { name: 'Patricia M.', post: 'Teacher' },
  { name: 'Patricia M.', post: 'Teacher' },
  { name: 'Chen Ying', post: 'Counselor' },
  { name: 'Liu Yangdong', post: 'Principal' },
];
const DashBoardSideBar: React.FC<Props> = () => {
  return (
    <div className="DashBoardSideBar">
      <div className="DashBoardSideBar__top">
        <div className="svgs">
          <img src={logo} className="svgs__logo" alt="" />
          <img src={hamMenu} className="svgs__ham" alt="" />
        </div>
        <div className="links">
          <div className="link active">
            <img src={home} alt="" />
            <h3>Home</h3>
          </div>
          <div className="link">
            <img src={lab} alt="" />
            <h3>My Pilots</h3>
          </div>
          <div className="link">
            <img src={inbox} alt="" />
            <h3>Inbox</h3>
          </div>
          <div className="link">
            <img src={myTeam} alt="" />
            <h3>My Team</h3>
          </div>
        </div>
      </div>
      <div className="DashBoardSideBar__middle">
        <div className="title">
          <p>Add Team Members</p>
          <img src={myTeam} alt="" />
        </div>
        <div className="team-members-container">
          {teamMeamber.map((member, index) => {
            return (
              <div key={index} className="team-member">
                <div className="avatar"></div>
                <h3 className="name">{member.name}</h3>
                <p className="post">{member.post}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="DashBoardSideBar__bottom">
        <div className="settings">
          <span>
            <img src={settingsSvg} alt="" />
          </span>
          <p>Settings</p>
        </div>
        <Link to="/auth" className="auth">
          <span>
            <img src={SignOutSvg} alt="" />
          </span>
          <p>Sign Out</p>
        </Link>
      </div>
    </div>
  );
};

export default DashBoardSideBar;
