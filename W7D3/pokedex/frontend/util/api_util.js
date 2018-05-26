export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchSoloPokemon = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  })
);

export const createPokemon = () => (
  $.ajax({
    method: 'POST',
    url: `/api/pokemon`
  })
);
