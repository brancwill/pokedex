import React, { Component } from "react";
import Card from "./Card";
import VariantCard from "./VariantCard"
import Tab from "./Tab";
import Pokemon from "./Pokemon";
import VariantList from "./VariantList"

class Interface extends Component {

    state = {
        currentScreen: this.createTabs()
    };

    createTabs() {
        return (
            <ul className="tabList">
            {Pokemon.map((pokemon) => 
            <div key={pokemon.key}>
                <li>
                    <div onClick={() => this.createCard(pokemon.key)}>
                        <Tab
                            idNumber={pokemon.id}
                            name={pokemon.name}
                            types={pokemon.types}
                            img={pokemon.img}
                            stats={pokemon.stats}
                            dexEntry={pokemon.dexEntry}
                            cry={pokemon.cry}
                            abilities={pokemon.abilities}
                            sprite={pokemon.sprite}
                        />
                    </div>
                </li>
            </div> 
        )}
        </ul>  
        )}

        createCard = (key) => {

                const cardScroll = document.getElementById("Screen")
                const currentCard = (
                <Card className="Card"
                idNumber={Pokemon[key].id}
                name={Pokemon[key].name}
                types={Pokemon[key].types}
                img={Pokemon[key].img}
                stats={Pokemon[key].stats}
                dexEntry={Pokemon[key].dexEntry}
                cry={Pokemon[key].cry}
                abilities={Pokemon[key].abilities}
                sprite={Pokemon[key].sprite}
                hasVariant={Pokemon[key].hasVariant}
                hideCard={this.hideCard}
                createTabs={this.createTabs}
                createCard={this.createCard}
                createVariant={this.createVariant}
                />
            )
            this.setState({
                currentScreen: currentCard
            },
            () => cardScroll.scrollTo(0, 0));
        }

        createVariant = (key) => {
            
            const currentCard = (
            <VariantCard className="Card"
            idNumber={VariantList[key].id}
            name={VariantList[key].name}
            types={VariantList[key].types}
            img={VariantList[key].img}
            stats={VariantList[key].stats}
            dexEntry={VariantList[key].dexEntry}
            abilities={VariantList[key].abilities}
            hideCard={this.hideCard}
            createTabs={this.createTabs}
            />
        )
        this.setState({
            currentScreen: currentCard
        })
    }

        hideCard = () => {
            this.setState({
                currentScreen: this.createTabs()
            })
        }

    render() {
        return(
            <React.Fragment>
                <img src="./img/PokedexDesktop.png" className="Pokedex" alt="Pokedex Interface" />
                <div id="Screen" className="Screen">
                    {this.state.currentScreen}
                </div>
            </React.Fragment>
        )
    }
}

export default Interface;