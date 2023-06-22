import '../styling/userPortal.css'
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'
import userbooklist from '../images/userbooklist.png'
import favouritebooks from '../images/favouritebooks.png'
import back14 from '../images/back14.jpg'

const UserPortalPage = () => {

    const myStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${back14})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

    }
    return (
        <div className="userPortal">
            <nav className="navbar2" >
                <div className="logo">
                    <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                    <h1>Kavi Narmad Library </h1>
                </div>
                <div className="logout">
                    <Link to="/AdminLoginPage">Logout</Link>
                </div>
            </nav>

            <main className='UserPortalContent' style={myStyle}>


                <div className="bookList">
                    <img src={userbooklist} alt="" width={"200px"} height={"200px"} />
                    <h1>List of Books </h1>
                    <Link to="/Booklist"><button>View</button></Link>
                </div>
                <div className="favouriteList">
                    <img src={favouritebooks} alt="" width={"200px"} height={"200px"} />
                    <h1>Favourite Books</h1>
                    <Link to="/FavouriteBooks"> <button>View</button></Link>
                </div>
            </main>


        </div>
    );
}

export default UserPortalPage;