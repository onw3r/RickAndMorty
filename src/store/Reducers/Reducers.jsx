import { combineReducers } from 'redux';
import {
  FETCH_EPISODES_REQUEST,
  FETCH_EPISODES_SUCCESS,
  FETCH_EPISODES_FAILURE,
  SEARCH_EPISODES,
} from '../Actions/Actions.jsx';

const episodesInitialState = {
  data: [],
  loading: false,
  error: null,
};

const episodesReducer = (state = episodesInitialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_EPISODES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_EPISODES:
      const searchTerm = action.payload.toLowerCase();
      const filteredEpisodes = state.data.filter((episode) =>
        episode.name.toLowerCase().includes(searchTerm)
      );
      return {
        ...state,
        data: filteredEpisodes,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  episodes: episodesReducer,
});

export default rootReducer;