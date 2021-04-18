import React from "react";
import { NavLink } from "react-router-dom";

export default function Navitem() {
  const links = [
    {
      link: "About",
      pathTo: "/about",
    },
    {
      link: "Blog",
      pathTo: "/blog",
    },
    {
      link: "Works",
      pathTo: "/works",
    },
    {
      link: "Service",
      pathTo: "/service",
    },
    {
      link: "Contact",
      pathTo: "/contact",
    },
  ];

  const listItems = links.map((links, index) => (
    <li key={index} className="font-semibold text-sm text-blueGray-700">
      <NavLink to={links.pathTo} activeClassName="text-lightBlue-700">
        {links.link}
      </NavLink>
    </li>
  ));

  return <>{listItems}</>;
}
