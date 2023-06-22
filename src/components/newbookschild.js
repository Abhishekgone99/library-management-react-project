const Newbookschild = (props) => {
    let booksdata = props.data
    let setfunction = props.funcdata
    let deleteFn = (id) => {
        setfunction(booksdata.filter((item) => item.id !== id))
    }
    return (
        <div className="newbookschild">
            <h1>List of books :- </h1>
            {
                booksdata.map((value) => {
                    return (
                        <div className="collections">
                            <div className="info">
                                <h5>Book Series : {value.bookseries}</h5>
                                <h4>Book Title : {value.booktitle}</h4>
                                <p>Author : {value.author}</p>
                                <p>Publisher : {value.publisher}</p>
                                <button onClick={() => deleteFn(value.id)}>Delete</button>
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

export default Newbookschild;