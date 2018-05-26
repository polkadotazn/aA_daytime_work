import { connect } from 'react-redux';
import { selectAllPokemon, selectPokeItems } from '../../reducers/selectors';
import {
  requestAllPokemon,
  requestSoloPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
  requestSoloPokemon: (id) => dispatch(requestSoloPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
