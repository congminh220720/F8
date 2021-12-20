import React, { useEffect, useRef, useState } from "react";

import Search from "./components/search";

import logo from "../../assets/img/header/f8_icon.png";
import iconMobile from "../../assets/img/header/icon-mobile.png";
import userIcon from "../../assets/img/header/userImg.png";
import f8_avatar from "../../assets/img/header/f8_avatar.png";



import "./style.scss";
import "./rps.scss";
import "../../assets/font/fontawesome-free-5.15.3-web/css/all.min.css";

function Header(props) {
  const { notifications } = props;

  const [isShowNotification, setIsShowNotification] = useState(false);
  const [isShowInformation, setIsShowInformationn] = useState(false);

  let notificationRef = useRef();
  let informationRef = useRef();

  const showNotification = (e) => {
    const classElementParent = "fas fa-bell";
    if (e.target.className == classElementParent) {
      if (isShowNotification) {
        setIsShowNotification(false);
      } else {
        setIsShowNotification(true);
      }
    }
  };

  const showInformation = (e) => {
    const classElementParent = "head__navbar-user-information-img__avatar";
    if (e.target.className == classElementParent) {
      if (isShowInformation) {
        setIsShowInformationn(false);
      } else {
        setIsShowInformationn(true);
      }
    }
  };
  useEffect(() => {
    let handlerNotification = (e) => {
      if (!notificationRef.current.contains(e.target)) {
        setIsShowNotification(false);
      }
    };

    let handlerInformation = (e) => {
      if (!informationRef.current.contains(e.target)) {
        setIsShowInformationn(false);
      }
    };
    document.addEventListener("mousedown", handlerNotification);
    document.addEventListener("mousedown", handlerInformation);
    return () => {
      document.removeEventListener("mousedown", handlerNotification);
      document.removeEventListener("mousedown", handlerInformation);
    };
  });

  return (
    <>
      <div className="head">
        <div className="head__logo-navbar">
          <a href="" className="head__logo-navbar-link">
            <img src={logo} alt="logo-F8" />
          </a>
          <h4 className="head__logo-navbar-title"> Học lập trình để đi làm </h4>
        </div>

        <div className="head__menu__navbar-mobile">
          <button>
            <img src={iconMobile} />
          </button>
        </div>
     
          <Search />
   

        <div className="head__navbar-user" ref={notificationRef}>
          <button className="head__navbar-user-search-mobile">
            <i className="fas fa-search"></i>
          </button>
          <button
            className="head__navbar-user-bell"
            onClick={(e) => showNotification(e)}
          >
            <i className="fas fa-bell"></i>
            <div
              className={`head__navbar-user-bell-notification ${
                isShowNotification ? "notification__Active" : ""
              }`}
            >
              <div className="head__navbar-user-bell-notification-text">
                <h6>Thông Báo</h6>
                <span>Đánh dấu tất cả đã đọc</span>
              </div>
              <ul className="head__navbar-user-bell-notification-list">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className="head__navbar-user-bell-notification-list-item"
                  >
                    <div className="head__navbar-user-bell-notification-list-item-img">
                      <img src={f8_avatar} alt="" />
                    </div>
                    <div className="head__navbar-user-bell-notification-list-item__text">
                      <div className="message">
                        {notification.fw}{" "}
                        <span className="name">{notification.name}</span>{" "}
                        {notification.message}
                      </div>
                      <div className="head__navbar-user-bell-notification-list-item__text__time">
                        {notification.time} tháng trước
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </button>
          <button
            ref={informationRef}
            className="head__navbar-user-information"
            onClick={(e) => showInformation(e)}
          >
            <img
              className="head__navbar-user-information-img__avatar"
              src={userIcon}
              alt=""
            />
            <div
              className={`head__navbar-user-information-box ${
                isShowInformation ? "information__Active" : ""
              }`}
            >
              <ul className="menu__user">
                <div className="menu__user__information">
                  <img src={userIcon} alt="" />
                  <div className="menu__user__information__text">
                    <div className="menu__user__information__text-name">
                      congminh nguyen
                    </div>
                    <div className="menu__user__information__text-email">
                      @congminh-nguyen
                    </div>
                  </div>
                </div>
                <hr />
                <ul className="menu__user__list">
                  <li className="menu__user__list-item">
                    <a className="menu__user__list-item-link" href=" ">
                      {" "}
                      Viết Blog
                    </a>
                  </li>
                  <li className="menu__user__list-item">
                    <a className="menu__user__list-item-link" href=" ">
                      Bài viết của tôi
                    </a>
                  </li>
                </ul>
                <hr />
                <ul className="menu__user__list content-has-save">
                  <li className="menu__user__list-item">
                    <a className="menu__user__list-item-link" href=" ">
                      Nội dung đã lưu
                    </a>
                  </li>
                </ul>
                <hr />

                <li id="user__logout">
                  <a id="logout__link" href="">
                    {" "}
                    Đăng Xuất
                  </a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
