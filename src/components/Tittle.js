import React from "react";
import { Helmet } from "react-helmet";

export default function Tittle(props) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </div>
  );
}
