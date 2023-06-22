import { useEffect, useState } from 'react';
import '../styling/userList.css'
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'
import UserListChild from "./userListchild";
const UserList = () => {
    let [userslist, setuserlist] = useState([])
    useEffect(() => {
        fetch(" http://localhost:4000/userslist")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setuserlist(data);
            })
    }, [])
    return (
        <div className="userlist" style={{ backgroundColor: "#d8f3dc" }}>

            <nav className="navbar2" >
                <div className="logo">
                    <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                    <h1>Kavi Narmad Library </h1>
                </div>
                <div className="logout">
                    <Link to="/AdminPortalPage">go back</Link>
                </div>
            </nav>

            <UserListChild data={userslist} funcdata={setuserlist} />
        </div>
    );
}

export default UserList;