import Newbookschild from "./newbookschild";
import '../styling/newbooks.css'
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'
import { useEffect, useState } from "react";
const NewBooks = () => {
    let [addbooks, setaddbooks] = useState([])

    useEffect(() => {
        fetch(" http://localhost:4000/addbooks")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setaddbooks(data);
            })
    }, [])
    return (
        <div className="newbooks" style={{ backgroundColor: "#d8f3dc" }}>

            <nav className="navbar2" >
                <div className="logo">
                    <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                    <h1>Kavi Narmad Library </h1>
                </div>
                <div className="logout">
                    <Link to="/AdminPortalPage">go back</Link>
                </div>
            </nav>

            <Newbookschild data={addbooks} funcdata={setaddbooks} />
        </div>
    );
}

export default NewBooks;