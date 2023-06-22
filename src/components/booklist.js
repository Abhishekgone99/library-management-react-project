import { useEffect, useState } from "react";
import Booklistchild from "./booklistchild";
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'

const Booklist = () => {
    let [userbooklist, setuserbooklist] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/addbooks")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setuserbooklist(data);
            })
    })
    return (
        <div className="booklist" style={{ backgroundColor: "#d8f3dc" }}>

            <nav className="navbar2" >
                <div className="logo">
                    <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                    <h1>Kavi Narmad Library </h1>
                </div>
                <div className="logout">
                    <Link to="/UserPortalPage">go back</Link>
                </div>
            </nav>



            <Booklistchild data={userbooklist} />
        </div>
    );
}

export default Booklist;