import {configureStore} from '@reduxjs/toolkit'
import ecommerceReducer from './slice'



const store = configureStore({
    reducer: {
        ecommerce: ecommerceReducer
    }
})

export default store