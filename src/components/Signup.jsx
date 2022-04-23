import React from 'react';
import "./Signup.css";

const Signup = () => {
    return (
        <div>
            <div class="main-container">
                <div className="text-container">
                    <h3>Sign in to Utter</h3>
                </div>
                <div className="input-content">
                    <input type="text" placeholder='Email' id="input1"></input>
                    <br></br>
                    <input type="password" placeholder='Password' id='input2'></input>
                    <br></br>
                    <input type="password" placeholder='Re-Enter Password' id='input2'></input>
                </div>
                <div class="forgot-content">
                    <a href=''>Forgot password?</a>
                </div>
                <button>Sign in</button>
                <h6>Don't have an account ?<a href=''>Sign up</a> </h6>
            </div>
        </div>
    )
}

export default Signup
