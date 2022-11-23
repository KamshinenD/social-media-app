import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Deewan Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Deewan Social</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder='email' className="loginInput" />
                        <input type="password" placeholder='Password' className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login