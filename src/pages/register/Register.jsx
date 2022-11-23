import './register.css'

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Deewan Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Deewan Social</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder='Username' className="loginInput" />
                        <input type="email" placeholder='Email' className="loginInput" />
                        <input type="password" placeholder='Password' className="loginInput" />
                        <input type="password" placeholder='Confirm Password' className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login instead</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;