/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import brandLogo from '../../images/brand-logo.png';
import userImg from '../../images/user-img.jpg';

const Header = () => {
  return (
    <div className="header-main">
      <div className="brand-logo">
        <a href="">
          <img src={brandLogo} alt="" className="" />
        </a>
      </div>
      <div className="main-nav ">
        <ul className="d-flex nav-item">
          <li>
            <a href="" className="">
              Dashboard
            </a>
          </li>
          <li className="active">
            <a href="" className="">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="">
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div className="usermenu-item">
        <ul className="d-flex item-set">
          <li>
            <a href="#" className="circle-ico-btn relative">
              <span className="icon-notification-on" />
              <span className="dot-indicator" />
            </a>
          </li>
          <li>
            <a href="index.html" className="circle-ico-btn ms-4">
              <span className="icon-settings" />
            </a>
          </li>
          <li className="drop-down">
            <a href="#" className="d-flex ms-4">
              <div className="profile-img">
                <img src={userImg} alt="" />
              </div>
              <div className="d-flex flex-column u-box">
                <div className="user-nme">Hello, Edwin John </div>
                <div className="role">Technical Supervisor</div>
              </div>

              <span className="icon-arrow-thin-down font-8 mx-3" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
