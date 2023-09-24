// combineReducer.js
import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";

// Combine reducers into a single rootReducer
const rootReducer = combineReducers({
    user: userReducer // Assigning the userReducer to the 'user' state
});

export default rootReducer;
