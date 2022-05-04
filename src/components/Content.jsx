import React from "react";

function Content(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="content">
      <p>{props.content}</p>
      <div>
        <img src={props.content.gif} alt="" />
      </div>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Content;
