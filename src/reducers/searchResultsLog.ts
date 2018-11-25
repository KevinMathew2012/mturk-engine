import { Map } from 'immutable';
import { GroupId, SearchResult, SearchResults } from '../types';

const initial: SearchResults = Map<GroupId, SearchResult>([]);

export default (state = initial, action: any): SearchResults => {
  return state;
};
