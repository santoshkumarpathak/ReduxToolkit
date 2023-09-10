import {configureStore} from '@reduxjs/toolkit'
import CommonInputReducer  from './commonInput';

const commonStore = configureStore({
    reducer:{
        CommonInput: CommonInputReducer 
    }
})

export default commonStore;