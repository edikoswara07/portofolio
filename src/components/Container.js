import React from "react";

export default function Container(props) {
  return (
    <div>
      <div className="container mx-auto xl:px-44">{props.children}</div>
    </div>
  );
}
