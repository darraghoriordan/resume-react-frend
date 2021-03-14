import React from "react";
import { NavLink } from "react-router-dom";
// import {NavLink} from 'react-router-dom';

export type HeaderProps = {
  loading: boolean;
};
const Navigation = ({ loading }: HeaderProps) => {
  return (
    <nav className="flex items-center justify-items-start sm:space-x-5 flex-wrap">
      <div>
        <a href="/" className="navbar-left ">
          <img
            className="h-10"
            src={"/images/avocalc-logo-56-x-45.png"}
            alt="Main logo "
          />
        </a>
      </div>
      <div className="font-mono flex-nowrap text-darkGreen divide-x">
        <NavLink to="/" className="px-5">
          calculate your order
        </NavLink>
        <NavLink to="/about" className="px-5">
          about
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
