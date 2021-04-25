import React from "react";
import classNames from 'classnames';

const Tab = (props) => {

    
    return (
        <div className="tab">
            <img src={props.sprite} className="sprite"/>
            <div className="tabInfo">
                <h5 className="tabNumber">#{props.idNumber}</h5>
                <h5 className="tabName">{props.name}</h5>
                {props.types.map((type, index) => 
                    <h4 className={classNames(props.types[index], "tabTypes")}>{type}</h4>
                )}
            </div>   
        </div>
    )
}


export default Tab;