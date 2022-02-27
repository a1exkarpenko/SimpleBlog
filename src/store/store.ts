import { combineReducers, createStore } from "redux";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
    post: postReducer
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>