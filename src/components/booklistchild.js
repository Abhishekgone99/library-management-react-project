import { useHistory } from "react-router-dom"

const Booklistchild = (props) => {
    let userbookdata = props.data

    let history = useHistory();
    let favouriteFn = (bookseries, booktitle, author, publisher, poster) => {
        let userdata = { bookseries, booktitle, author, publisher, poster }
        fetch("http://localhost:4000/favourites", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(userdata)
        })
        alert("Book added to favorites")
        history.push("/FavouriteBooks")
    }

    return (
        <div className="booklistchild">
            <h1>List of books :- </h1>
            {
                userbookdata.map((value) => {
                    return (
                        <div className="collections">
                            <div className="info">
                                <h5>Book Series : {value.bookseries}</h5>
                                <h4>Book Title : {value.booktitle}</h4>
                                <p>Author : {value.author}</p>
                                <p>Publisher : {value.publisher}</p>
                                <button onClick={() => favouriteFn(value.bookseries, value.booktitle, value.author, value.publisher, value.poster)}>Favourite</button>
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

export default Booklistchild;