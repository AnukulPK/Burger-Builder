import React from 'react';

import "./Button.css";

const button = (props) =>(
    <button className={props.btnType === "Success" ? "Button Success":"Button Danger"} onClick={props.clicked}>{props.children}</button>
)

export default button;