import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className='myheader'>
      <header className="nm">
    {/* start navbar */}
    <nav className="nav">
      <h1>
        <Link className="link1" to="/home">Online Exam</Link>
      </h1>
      <ul>
        <li>
          <NavLink to="/login">انشاء حساب</NavLink>
        </li>
        <li>
          <NavLink to="/login"> تسجيل دخول</NavLink>
        </li>
        <li>
          <NavLink to="/desc">شروط الاستحدام</NavLink>
        </li>
        <li>
          <NavLink to="/home">الصفحه الرئيسية</NavLink>
        </li>
      </ul>
    </nav>
    {/* end navbar */}
  </header>
    </div>
  );
}

export default Header;
