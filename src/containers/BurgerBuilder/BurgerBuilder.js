import {useState} from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSumary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

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
    const[purchasable, setPurchasable]=useState(false);
    const[purchasing,setPurchasing]=useState(false);
    const[loading,setLoading] = useState(false);


    const updatePurchaseState = (ingredientss)=>{        
        const sum = Object.keys(ingredientss)
        .map(igKey=>{
            return ingredientss[igKey]
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        
        if(sum>0){
            setPurchasable(true);
        }
        else{
            setPurchasable(false);
        }        
    }

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
        updatePurchaseState(updatedIngredients);        
    }

    const removeIngredientHandler=(type)=>{
        const oldCount=ingredients[type];
        if(oldCount<=0){
            return;
        }       
        const updatedCount = oldCount - 1;
        const updatedIngredients={
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice-priceDeduction;
        setIngredients(updatedIngredients);
        setTotalPrice(newPrice); 
        updatePurchaseState(updatedIngredients); 
    }

    const purchaseHandler=()=>{
        setPurchasing(true);
    }

    const purchaseCancelHandler = ()=>{
        setPurchasing(false);
    }

    const purchaseContinueHandler = ()=>{
        // alert("You continue!");
        setLoading(true);
        const order = {
            finalIngredients: ingredients,
            price: totalPrice,
            customer:{
                name:'Anukul',
                address:{
                    street:'Test street 1',
                    zipCode:'567890',
                    country:'Germany'
                },
                email:'test@test.com'
            },
            deliveryMethod:'fastest'

        };
        axios.post('/orders.json',order)
        .then(response=>{
            setLoading(false);
            setPurchasing(false);
            console.log(response);
        })
        .catch(error=>{
            setLoading(false);
            setPurchasing(false);
            console.log(error);
        })
    }

    const disabledInfo = {
        ...ingredients
    };
    for(let key in disabledInfo){
        disabledInfo[key]=disabledInfo[key]<=0
    }

    let orderSummary = <OrderSummary 
    ingredients={ingredients}
    purchaseCancelled={purchaseCancelHandler}
    purchaseContinued={purchaseContinueHandler} 
    price={totalPrice}            
    />;

    if(loading){
        orderSummary=<Spinner/>
    }
    

    return (
        <>
        <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
            {orderSummary}
        </Modal>
        <Burger ingredients={ingredients}/>       
        <BuildControls 
        ingredientAdded={addIngredientHandler} 
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        price={totalPrice}
        purchasable={purchasable}
        ordered={purchaseHandler}
        />        
        </>
    )
}
