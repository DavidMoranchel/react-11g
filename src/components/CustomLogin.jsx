import React from "react";

export default function CustomLogin(props) {
  return (
    <React.Fragment>
      <label className="text-white" htmlFor={props.id}>
        {props.id}
      </label>
      <input
        type={props.type ? props.type : "text"}
        className="form-control"
        id={props.id}
        aria-describedby="emailHelp"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.callback(event.target.value)}
      />
    </React.Fragment>
  );
}
