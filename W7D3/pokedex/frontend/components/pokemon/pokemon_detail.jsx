import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSoloPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {

    if (this.props.match.params.pokemonId
      !== newProps.match.params.pokemonId) {
      this.props.requestSoloPokemon(newProps.match.params.pokemonId);
    }
  }

  render () {
    const { pokemon, items } = this.props;
    if (!pokemon) return null;

    const itemNames = pokemon.item_ids.map(x => {
        return (
          <li>
            <Link to={`/pokemon/${pokemon.id}/items/${x}`} >
              <img src={items[x].image_url} id='items' />
            </Link>
          </li>
        );
    });
// <ItemIndexItem pokemon={pokemon} items={items} />

    return (
      <div>
        <img src={pokemon.image_url}></img>
        <ul>
          <li>Name: {pokemon.name}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Items: {itemNames}</li>
        </ul>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer}/>
      </div>
    );
  }

}

export default PokemonDetail;
