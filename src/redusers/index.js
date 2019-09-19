import { combineReducers } from "redux";
import categories from "./categories";
import ui from "./ui";

export default combineReducers({
    categories,
    ui
});
