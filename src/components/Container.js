import React from "react";

export default function Container(props) {
  return (
    <div>
      <div className="container mx-auto px-4 xl:px-44">{props.children}</div>
    </div>
  );
}
