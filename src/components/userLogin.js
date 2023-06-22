import '../styling/adminLogin.css'
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'
import userpage from '../images/userpage.png'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const UserLoginPage = () => {
    let [name, setname] = useState('')
    let [password, setpassword] = useState('')
    let [remember, setremember] = useState('')
    let submitFn = (f) => {
        f.preventDefault();
        let userLoginData = ["name", "password", "remember"]
        fetch("http://localhost:4000/userLoginDetails", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(userLoginData)
        })
        alert("logged in")
    }
    return (
        <div className="userLogin">
            <div className="navbar1" >
                <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                <h1>Kavi Narmad Library </h1>
            </div>

            <div className="formPage">
                <div className='sideimage'>
                    <img src={userpage} alt="" style={{ width: "400px", height: "500px" }} />
                </div>

                <div className="sideform">

                    <form onSubmit={submitFn}>
                        <h2>User Login <br /> to <br /> Kavi Narmad Library </h2>
                        <div>
                            <label htmlFor="name">Username</label> <br />
                            <input type="email" id='name' name='name' placeholder='example@gmail.com' value={name} onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label> <br />
                            <input type="password" id='password' name='password' placeholder='your password' value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div>
                            <input type="checkbox" name='remember' id='remember' value={remember} onChange={(e) => setremember(e.target.value)} />
                            <label htmlFor="remember" id='rem1'>Remember me</label>
                            <label htmlFor="forgot" id='forgot'><a href="/userLoginPage">Forgot Password</a></label>
                        </div>
                        <Link to="/UserPortalPage"><Button variant="secondary">Login</Button></Link>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default UserLoginPage;