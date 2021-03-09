import React, {useState,useEffect} from 'react';
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";


function Checkout() {
    const [ingredients,setIngredients] = useState({});

    useEffect(()=>{
        setIngredients(
            {
                salad:1,
                meat:1,
                cheese:1,
                bacon:1
            }
        )
    })    
    
    return (
        <div>
            <CheckoutSummary ingredients={ingredients}/>
        </div>
    )
}

export default Checkout
