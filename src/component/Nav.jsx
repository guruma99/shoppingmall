import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
  const loginList = ["매장찾기", "고객센터", "가입하기", "로그인"];
  const menuList = [
    "New Releases",
    "Men",
    "Women",
    "Kids",
    "Sale",
    "SNKRS",
    "나이키앱",
  ];

  const search = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const heart = <FontAwesomeIcon icon={faHeart} />;
  const cart = <FontAwesomeIcon icon={faCartShopping} />;
  return (
    <div>
      <div className="login">
        <ul>
          {loginList.map((a, i) => {
            return (
              <li className="login-item" key={i}>
                {a}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav">
        <img width={70} src="/nikelogo.png" alt="로고" />
        <ul className="gnb-list">
          {menuList.map((menu, i) => {
            return <li key={i}>{menu}</li>;
          })}
        </ul>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <div className="icon-list">
          <div className="search-box">
            <span>{search}</span>
            <input type="text" placeholder="검색" />
          </div>
          <div className="second-icon-box">
            <span>{heart}</span>
            <span>{cart}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
