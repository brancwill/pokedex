import React, { Component } from "react"
import AudioButton from "./AudioButton";
import Variants from "./Variants"
class Card extends Component {

    render() {
        return (
            <div className="card">
                <div className="navButtons">
                    <button disabled={this.props.idNumber <= 1} className="navBtn" onClick={() => this.props.createCard((this.props.idNumber - 1) - 1)}>&#10094;</button>
                    <button className="navBtn" onClick={() => this.props.hideCard()}>&#10006;</button>
                    <button disabled={this.props.idNumber >= 151} className="navBtn" onClick={() => this.props.createCard((this.props.idNumber - 1) + 1)}>&#10095;</button>
                </div>
                <Variants 
                idNumber={this.props.idNumber}
                createCard={this.props.createCard}
                createVariant={this.props.createVariant}
                hasVariant={this.props.hasVariant}
                />
                <div className="pokemonTitle">
                    <h2>{this.props.name}</h2>
                    <h2>#{this.props.idNumber}</h2>
                </div>
                <img src={this.props.img} className="pokemonImage" />
                <div className="Types">
                    {this.props.types.map((type, index) => 
                    <h4 className={this.props.types[index]}>{type}</h4>)}
                </div>
                <AudioButton cry={this.props.cry}/>
                <h4 className="abilityTitle">Abilities</h4>
                <div className="abilities">
                    {this.props.abilities.map((ability) => 
                    <h5>{ability}</h5>)}
                </div>
                <p className="dexEntry">{this.props.dexEntry}</p>
                <h4 className="statTitle">Base Stats</h4>
                <ul className="stats">
                    <li>HP: {this.props.stats[0]}</li>
                    <li>Atk: {this.props.stats[1]}</li>
                    <li>Def: {this.props.stats[2]}</li>
                    <li>Sp.Atk: {this.props.stats[3]}</li>
                    <li>Sp.Def: {this.props.stats[4]}</li>
                    <li>Spd: {this.props.stats[5]}</li>
                    <li>Total: {this.props.stats[6]}</li>
                </ul>
            </div>
        )
    }
}

    

export default Card