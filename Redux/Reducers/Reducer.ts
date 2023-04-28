import { combineReducers } from "redux";
import { ADD_GAMES, Action } from '../Action/Action';
import { Game } from '../store/types';

const initialGamesState: Game[] = [];

const gamesReducer = (state = initialGamesState, action: Action) => {
  switch (action.type) {
    case ADD_GAMES:
      return [...action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  games: gamesReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
