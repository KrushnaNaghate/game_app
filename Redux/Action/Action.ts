import { Game } from '../store/types';

export const ADD_GAMES = 'ADD_GAMES';

export type Action = AddGamesAction;
interface AddGamesAction {
  type: typeof ADD_GAMES;
  payload: Game[];
}
export const addGames = (games: Game[]): AddGamesAction => ({
  type: ADD_GAMES,
  payload: games,
});
