import { createStore} from "redux";
import { combineReducers } from "redux";
import Icecreamreducerfn from "./IceCreamReducer";
import Cakereducerfn from "./CakeReducer";

const allReducers = combineReducers(
    {
        IcecreamReducer:Icecreamreducerfn,
        CakeReducer:Cakereducerfn
    }
)

const mainStore = createStore(allReducers);

export default mainStore;
