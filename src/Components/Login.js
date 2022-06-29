import React from 'react'

export default function Login() {
    return (
        <div className="login-page">
            <div className="form">
                    <div className='login'>
                        <div class="login-header">
                            <h2 className="sign-in" >Sign In</h2>
                            <p>Please enter the credentials</p>
                        </div>              
                    </div>
                    <form action="" className='login-form'>
                        <input type="text" name="" id="" placeholder='Username'/>
                        <input type="password" name="" id="" placeholder='Password'/>
                        <button type="button" className='btn'>Sign in</button>
                    </form>
            </div>
        </div>
    )
}
