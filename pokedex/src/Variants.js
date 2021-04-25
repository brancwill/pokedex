import React from "react"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import VariantList from "./VariantList";

const Variants = (props) => {

    const variations = VariantList.filter((variant) => variant.id === props.idNumber);
    const variantItems = variations.map((variant) => 
        <Dropdown.Item className="dropdownItem" key={variant.variantId.toString()} href="#" onClick={() => props.createVariant(variant.variantId)}>{variant.name}</Dropdown.Item>  
);
    return(
        <div>
            <DropdownButton id="dropdown-basic-button" disabled={props.hasVariant != true} title="Variants" className="dropDown">
                {variantItems}
            </DropdownButton>
        </div>
    )
}

export default Variants;
