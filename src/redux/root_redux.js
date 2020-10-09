import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";


import userReducer from "./user/user_redux";
import userData from "./userData/userData_redux";
import selectJobDataReducer  from "./client_job/clientJobData_redux";

const persistConfig={
    key:"root",
    storage:storageSession,
    whitelist:['user','userData',"selectJobDataReducer"]
}

const rootReducer= combineReducers({
    user:userReducer,
    data:userData,
    select:selectJobDataReducer
    
});

export default persistReducer(persistConfig,rootReducer);