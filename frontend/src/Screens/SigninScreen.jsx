import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import { signin } from '../actions/userActions';





const SigninScreen = (props) => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const userSignIn = useSelector(state => state.userSignIn)
    const {loading, userInfo, error} = userSignIn;

    const dispatch = useDispatch()
   
    useEffect( () => {
        if(userInfo){
            props.history.push("/")
        }
        return () => {

        };
    }, [userInfo]

     )





    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }
    
    
    return(
        <>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h3>Sign In</h3>
                        </li>
                        <li>
                            {loading && <div>Loading....</div> }
                            {error && <div>{error}</div> }
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"  onChange={(e) => setPassword(e.target.value)}  />
                        </li>
                        <li>
                            <button type="submit" className="button primary">
                                Sign In
                            </button>
                        </li>
                        <li>
                            New To Amazon?
                        </li>
                        <li>
                            <Link className="button text-center secondary">
                                Create new Amazon account
                            </Link>
                        </li>
                    </ul>
                </form>
            </div>
        </>
    )
}

export default SigninScreen;