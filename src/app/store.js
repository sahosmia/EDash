import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "../features/common/commonSlice";

  const store = configureStore({
 reducer:{
   common: commonReducer,
 }
 })

 export default store;