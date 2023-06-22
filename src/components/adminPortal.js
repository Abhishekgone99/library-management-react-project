import '../styling/adminPortal.css'
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'
import addbooks from '../images/addbooks.png'
import adduser from '../images/adduser.png'
import booklist from '../images/booklist.png'
import userlist from '../images/userlist.png'
import back1 from '../images/back1.webp'

const AdminPortalPage = () => {

    const myStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${back1})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '25% 75%'
    }
    return (
        <div className="adminPortal">
            <nav className="navbar2" >
                <div className="logo">
                    <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                    <h1>Kavi Narmad Library </h1>
                </div>
                <div className="logout">
                    <Link to="/AdminLoginPage">Logout</Link>
                </div>
            </nav>

            <main className='adminPortalContent' style={myStyle}>
                <div className="addBooks">
                    <img src={addbooks} alt="" width={"200px"} height={"200px"} />
                    <h1>New Books</h1>
                    <Link to="/BookForm"><button>Add</button></Link>
                </div>
                <div className="addUsers">
                    <img src={adduser} alt="" width={"200px"} height={"200px"} />
                    <h1>New Users</h1>
                    <Link to="/UserForm"><button>Add</button></Link>
                </div>
                <div className="bookList">
                    <img src={booklist} alt="" width={"200px"} height={"200px"} />
                    <h1>List of Books </h1>
                    <Link to="/NewBooks"><button>View</button></Link>
                </div>
                <div className="userList">
                    <img src={userlist} alt="" width={"200px"} height={"200px"} />
                    <h1>List of Users</h1>
                    <Link to="/UserList"><button>View</button></Link>
                </div>
            </main>


        </div>
    );
}

export default AdminPortalPage;