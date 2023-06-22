import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'

const FavoriteBooks = () => {
    let [favourites, setfavourites] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/favourites")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setfavourites(data)
            })
    }, [])
    return (
        <div className="favouritebooks">

            <nav className="navbar2" >
                <div className="logo">
                    <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                    <h1>Kavi Narmad Library </h1>
                </div>
                <div className="logout">
                    <Link to="/UserPortalPage">go back</Link>
                </div>
            </nav>



            {
                favourites.map((value) => {
                    return (
                        <div className="collections">
                            <div className="info">
                                <h5>Book Series : {value.bookseries}</h5>
                                <h4>Book Title : {value.booktitle}</h4>
                                <p>Author : {value.author}</p>
                                <p>Publisher : {value.publisher}</p>
                            </div>
                            <div className="poster">
                                <img src={value.poster} alt="" width={"200px"} height={"300px"} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FavoriteBooks;