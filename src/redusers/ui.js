import { UI_ACTION_TYPES as constants } from "../constants.js";

const initialState = { allowed: true, blocked: true };

export default function ui(state = initialState, action) {
    switch (action.type) {
        case constants.SWITCH_VISIBILITY: {
            return { ...state, [action.property]: !state[action.property] };
        }
        default:
            return state;
    }
}
