import axios from 'axios';

export const FETCH_EPISODES_REQUEST = 'FETCH_EPISODES_REQUEST';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';
export const SEARCH_EPISODES = 'SEARCH_EPISODES';

export const fetchEpisodes = () => {
  return async (dispatch) => {
    try {
      let allEpisodes = [];
      let page = 1;
      let response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);

      while (response.data.info.next) {
        allEpisodes = [...allEpisodes, ...response.data.results];
        page++;
        response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
      }

      allEpisodes = [...allEpisodes, ...response.data.results];

      dispatch(fetchEpisodesSuccess(allEpisodes));
    } catch (error) {
      dispatch(fetchEpisodesFailure(error));
    }
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
