import { combineReducers } from "redux";
import { updateProfileDetails } from "./Reducer";


const allReducers=combineReducers({
    updateProfileDetails:updateProfileDetails
})

export default allReducers