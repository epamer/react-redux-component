import { CATEGORIIES_ACTION_TYPES as constants } from "../constants";
import { getNormalizeStore } from "../helpers";
const initialState = {
  byId: {},
  allowedIdis: [],
  allIdis: []
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case constants.LOAD_DATA_REQUEST:
      return state;

    case constants.LOAD_DATA_SUCCESS:
      const normalizedStore = getNormalizeStore(action.payload);
      return Object.assign({}, normalizedStore);

    case constants.LOAD_DATA_FAIL:
      return state;

    case constants.ALLOW_ALL_CATEGORIES:
      return Object.assign({}, state, { allowedIdis: state.allIdis });

    case constants.BLOCK_ALL_CATEGORIES:
      return Object.assign({}, state, { allowedIdis: [] });

    case constants.SWITCH_CATEGORY_STATUS: {
      const { id } = action;
      const allowedIdis = state.allowedIdis.includes(id)
        ? state.allowedIdis.filter(el => el !== id)
        : [...state.allowedIdis, id];
      return Object.assign({}, state, { allowedIdis });
    }

    default:
      return state;
  }
}
