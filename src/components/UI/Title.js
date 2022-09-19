import React from "react";

function Title(props) {
  return (
    <div className="title__wrap">
      <h3 className="title__tag">{props.title}</h3>
    </div>
  );
}

export default Title;
