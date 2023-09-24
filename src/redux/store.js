// configureStore.js
import { createStore } from "redux";
import rootReducer from "./combineReducer";

// Create the Redux store by passing the rootReducer
const store = createStore(rootReducer);

// Export the store for later use
export default store;
