export type Game = {
  id: number;
  title: string;
  highlightsSupported: boolean;
  fullyOptimized: boolean;
  steamUrl: string;
  publisher: string;
  genre: string;
  status: string;
};
  
  export interface AppAction {
    type: 'ADD_GAMES';
    payload: Game[];
  }
  