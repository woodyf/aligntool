import React, { useState, useCallback } from "react";

function rectToItem({ name, x, y, h, w }) {
  return (
    <li key={name}>
      {name}: x = {x}, y = {y}, height = {h}, width = {w}
    </li>
  );
}
function rectToCsv({ name, x, y, h, w }) {
  return <p key={name}>{`${name}, ${x}, ${y}, ${h}, ${w}`}</p>;
}

function List({ rects = [], ...props }) {
  const [isCsv, setCsv] = useState(false);
  const toggle = useCallback(() => setCsv((b) => !b), []);
  return (
    <div {...props}>
      <h4>對位區塊</h4>
      <button onClick={toggle}> {isCsv ? "一般格式" : "CSV格式"} </button>
      {isCsv ? (
        rects.map(rectToCsv)
      ) : (
        <code>
          <ul>{rects.flatMap(rectToItem)}</ul>
        </code>
      )}
    </div>
  );
}

export default List;
