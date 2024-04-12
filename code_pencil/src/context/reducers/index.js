import {combineReducers} from "redux";
import userAuthReducer from "./userAuthReducer";
import projectsReducers from "./projectsReducers";
import searchReducers from "./searchReducer";
const myReducer = combineReducers({
    user: userAuthReducer,
    projects: projectsReducers,
    searchTerm: searchReducers
})

export default myReducer;