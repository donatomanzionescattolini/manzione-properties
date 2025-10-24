import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import propertyReducer from "./propertySlice";
import tenantReducer from "./tenantSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        property: propertyReducer,
        tenant: tenantReducer,
    },
});

export default store;
