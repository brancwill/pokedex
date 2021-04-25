import React, { Component } from "react"

class VariantCard extends Component {

    render() {
        return (
            <div className="card">
                <div className="navButtons">
                    <button className="navBtn" onClick={() => this.props.hideCard()}>&#10006;</button>
                </div>
                <div className="pokemonTitle">
                    <h2>{this.props.name}</h2>
                </div>
                <img src={this.props.img} className="pokemonImage" />
                <div className="Types">
                    {this.props.types.map((type, index) => 
                    <h4 className={this.props.types[index]}>{type}</h4>)}
                </div>
                <h4 className="abilityTitle">Abilities</h4>
                <div className="abilities">
                    {this.props.abilities.map((ability) => 
                    <h5>{ability}</h5>)}
                </div>
                <p className="dexEntry">{this.props.dexEntry}</p>
            </div>
        )
    }
}

    

export default VariantCard;