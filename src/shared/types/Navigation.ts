import { GameResult } from '../../features/game/types';
import { Difficulty } from './Difficulty';

export type RootStackParamList = {
  Home: undefined;
  Game: { difficulty: Difficulty };
  Result: { result: GameResult}
};