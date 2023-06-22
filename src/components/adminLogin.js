import '../styling/adminLogin.css'
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'
import pngegg2 from '../images/pngegg2.png'
import { Button } from 'react-bootstrap';


const AdminLoginPage = () => {

    return (
        <div className="adminLogin">
            <div className="navbar1" >
                <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                <h1>Kavi Narmad Library </h1>
            </div>

            <div className="formPage">
                <div className='sideimage'>
                    <img src={pngegg2} alt="" style={{ width: "600px", height: "500px" }} />
                </div>

                <div className="sideform">

                    <form action=''>
                        <h2>Admin Login <br /> to <br /> Kavi Narmad Library </h2>
                        <div>
                            <label htmlFor="name">Username</label> <br />
                            <input type="email" id='name' name='name' placeholder='example@gmail.com' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label> <br />
                            <input type="password" id='password' name='password' placeholder='your password' />
                        </div>
                        <div>
                            <input type="checkbox" name='remember' id='remember' />
                            <label htmlFor="remember" id='rem1'>Remember me</label>
                            <label htmlFor="forgot" id='forgot'><a href="/adminLoginPage">Forgot Password</a></label>
                        </div>
                        <Link to="/AdminPortalPage"><Button variant="secondary" >Login</Button></Link>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default AdminLoginPage;