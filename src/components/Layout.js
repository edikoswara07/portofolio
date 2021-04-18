import React from "react";

export default function Layout(props) {
  return (
    <div>
      <main className="antialiased font-body">{props.children}</main>
    </div>
  );
}
