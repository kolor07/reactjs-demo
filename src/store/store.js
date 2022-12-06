import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../layout/login/loginSlice';
import HeaderMiddleSlice from '../component/HeaderMiddle/HeaderMiddleSlice';

const store = configureStore({
    reducer: {
        loginInfo: loginReducer,
        showCanvasMenu: HeaderMiddleSlice,
    },
    devTools: true,
});
// console.log(">>>login Reducer....", loginReducer);
// console.log(">>>store....", store);

export default store;
