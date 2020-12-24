import {useState} from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';

export default function BurgerBuilder() {
    const INGREDIENT_PRICES = {
        salad:0.5,
        cheese:0.4,
        meat:1.3,
        bacon:0.7
    }

    const[ingredients,setIngredients]=useState({
        salad:0, 
        bacon:0,
        cheese:0,
        meat:0
    });
    const[totalPrice, setTotalPrice]=useState(4);



    const addIngredientHandler=(type)=>{
        const oldCount=ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients={
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice+priceAddition;
        setIngredients(updatedIngredients);
        setTotalPrice(newPrice);        
    }

    const removeIngredientHandler=(type)=>{

    }

    return (
        <>
        <Burger ingredients={ingredients}/>       
        <BuildControls ingredientAdded={addIngredientHandler}/>
        </>
    )
}
