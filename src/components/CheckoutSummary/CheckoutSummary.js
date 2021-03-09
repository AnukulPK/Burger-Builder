import React from 'react';
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";
import "./CheckoutSummary.css";

function CheckoutSummary(props) {
    return (
        <div className="CheckOutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width:"100%",margin:"auto"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked>CANCEL</Button>
            <Button btnType="Continue" clicked>SUCCESS</Button>
        </div>
    )
}

export default CheckoutSummary
