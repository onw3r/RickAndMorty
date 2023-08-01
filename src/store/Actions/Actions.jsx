import axios from 'axios';

export const FETCH_EPISODES_REQUEST = 'FETCH_EPISODES_REQUEST';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';
export const SEARCH_EPISODES = 'SEARCH_EPISODES';

export const fetchEpisodes = () => {
  return (dispatch) => {
    dispatch(fetchEpisodesRequest());
    axios
      .get('https://rickandmortyapi.com/api/episode')
      .then((response) => {
        dispatch(fetchEpisodesSuccess(response.data.results));
      })
      .catch((error) => {
        dispatch(fetchEpisodesFailure(error.message));
      });
  };
};

export const searchEpisodes = (searchTerm) => {
  return {
    type: SEARCH_EPISODES,
    payload: searchTerm,
  };
};

export const fetchEpisodesRequest = () => {
  return {
    type: FETCH_EPISODES_REQUEST,
  };
};

export const fetchEpisodesSuccess = (episodes) => {
  return {
    type: FETCH_EPISODES_SUCCESS,
    payload: episodes,
  };
};

export const fetchEpisodesFailure = (error) => {
  return {
    type: FETCH_EPISODES_FAILURE,
    payload: error,
  };
};