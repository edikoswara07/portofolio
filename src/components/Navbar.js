import React from "react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Navitem from "./Navitem";

export default function Navbar() {
  return (
    <div>
      <div className="bg-blueGray-50 border border-b border-blueGray-300">
        <Container>
          <div className="flex justify-between items-center py-6">
            <div>
              <NavLink
                to="/"
                exact
                className="font-bold text-xl text-blueGray-700 leading-relaxed tracking-wide"
              >
                Edi
                <span className="text-blueGray-900 font-semibold">
                  Koswara.Id
                </span>
              </NavLink>
            </div>
            <div>
              <ul className="flex space-x-6">
                <li className="font-semibold text-sm text-blueGray-700">
                  <NavLink to="/" exact activeClassName="text-lightBlue-700">
                    Home
                  </NavLink>
                </li>
                <Navitem />
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
