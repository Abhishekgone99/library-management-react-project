import '../styling/booksForm.css'
import back5 from '../images/back5.jpg'
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const BookForm = () => {
    const myStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url(${back5})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
    }

    let history = useHistory();
    let [bookseries, setbookseries] = useState('')
    let [booktitle, setbooktitle] = useState('')
    let [author, setauthor] = useState('')
    let [publisher, setpublisher] = useState('')
    let [poster, setposter] = useState('')
    let submitFn = (e) => {
        e.preventDefault();
        let booksdata = { bookseries, booktitle, author, publisher, poster }
        fetch("http://localhost:4000/addbooks", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(booksdata)
        })
        alert("Booked added to the library !!!")
        history.push('/NewBooks')
    }



    return (
        <div className="bookform" style={myStyle}>
            <nav className="navbar2" >
                <div className="logo">
                    <Link to="/"><img src={logo4} alt="" height={"40px"} /></Link>
                    <h1>Kavi Narmad Library </h1>
                </div>
                <div className="logout">
                    <Link to="/AdminPortalPage">go back</Link>
                </div>
            </nav>
            <main className='mainbody' >
                <form onSubmit={submitFn} className='addBookForm'>
                    <h2> Adding books to the library</h2>
                    <div>
                        <label htmlFor="bookseries">Book Series</label>
                        <input type="text" id="bookseries" name="bookseries" required placeholder=' book series' value={bookseries} onChange={(f) => setbookseries(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="title">Book Title</label>
                        <input type="text" id="title" name="title" required placeholder=" book name" value={booktitle} onChange={(f) => setbooktitle(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name="author" required placeholder=" author name" value={author} onChange={(f) => setauthor(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="publisher">Publisher</label>
                        <input type="text" id="publisher" name="publisher" required placeholder=" publisher name" value={publisher} onChange={(f) => setpublisher(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="poster">Poster</label>
                        <input type="text" id="poster" name="poster" value={poster} onChange={(f) => setposter(f.target.value)} />
                    </div>
                    <button>Add Book</button>
                </form>
            </main>
        </div>
    );
}

export default BookForm;