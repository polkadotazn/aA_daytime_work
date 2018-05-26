import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSoloPokemon } from '../../actions/pokemon_actions';
import { selectPokeItems } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];
  return {
    pokemon,
    items: state.entities.items
  };
};

const mapDispatchToProps = dispatch => ({
  requestSoloPokemon: (id) => dispatch(requestSoloPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
