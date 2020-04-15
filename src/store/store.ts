import { rootReducer } from "./reducers/rootReducer";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

type TRootReducer = typeof rootReducer;
export type TAppState = ReturnType<TRootReducer>;

export default store;
