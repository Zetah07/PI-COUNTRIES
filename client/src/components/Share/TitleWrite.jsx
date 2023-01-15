import React from "react";
import "./TitleWrite.css";

function TitleWrite( {title}) {
  return (
    <div>
      <h1 className="machine__write" style={{ width: `${title.length + 1}ch` }}>
        {title}
      </h1>
    </div>
  );
}

export default TitleWrite;