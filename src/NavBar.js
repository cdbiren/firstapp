import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/fixtures">
            <li>Fixtures</li>
          </NavLink>
          <NavLink to="/leagues">
            <li>
              <span>Leagues</span>
              <ul className="dropdown-1">
                <NavLink to="/leagues/laliga">
                  <li>Laliga</li>
                </NavLink>
                <NavLink to="/leagues/ucl">
                  <li>Champions League</li>
                </NavLink>
                <NavLink to="/leagues/epl">
                  <li>English Premier League</li>
                </NavLink>
                <NavLink to="/leagues/bundesliga">
                  <li>Bundesliga</li>
                </NavLink>
                <NavLink to="/leagues/seria-a">
                  <li>Seria A</li>
                </NavLink>
                <NavLink to="/leagues/ligue-1">
                  <li>Ligue 1</li>
                </NavLink>
              </ul>
            </li>
          </NavLink>
          <NavLink to="/transfer">
            <li>Transfer</li>
          </NavLink>
          <NavLink to="/news">
            <li>News</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
