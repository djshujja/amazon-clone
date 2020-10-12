import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk' 
import { cartReducer } from './reducers/cartReducers';
import Cookie from 'js-cookie';
import { userSigninReducer } from './reducers/userReducers';


const cartItems = Cookie.getJSON('cartItems') || [];
const initialState = {cartItems};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSigninReducer
    
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));


export default store;
