import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
];

function BuildControls(props) {
    return (
        <div className="build-controls">
            {controls.map((ctrl)=>{
                return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}            
                added={()=>props.ingredientAdded(ctrl.type)}
                />
            })}
        </div>
    )
}

export default BuildControls
