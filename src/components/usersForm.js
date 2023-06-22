import '../styling/usersForm.css'
import back6 from '../images/back6.jpg'
import { Link } from 'react-router-dom';
import logo4 from '../images/logo4.jpg'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const UserForm = () => {
    const myStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${back6})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
    }

    let history = useHistory();
    let [SrNo, setsrno] = useState('')
    let [name, setname] = useState('')
    let [email, setemail] = useState('')
    let [birthdate, setbirthdate] = useState('')
    let [aadhar, setaadhar] = useState('')
    let [institute, setinstitute] = useState('')
    let [gender, setgender] = useState('')
    let submitFn = (e) => {
        e.preventDefault();
        let userformdata = { SrNo, name, email, birthdate, aadhar, institute, gender }
        fetch("http://localhost:4000/userslist", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userformdata)
        })
        alert("New user added to the library !!!")
        history.push("/UserList")
    }
    return (
        <div className="userform" style={myStyle}>
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
                <form onSubmit={submitFn} className='addUserForm'>
                    <h2> Adding new users to the library</h2>
                    <div>
                        <label htmlFor="srno">SrNo</label>
                        <input type="number" id="srno" name="srno" placeholder='user no' value={SrNo} onChange={(f) => setsrno(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder=' full name' value={name} onChange={(f) => setname(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder=" example@gmail.com" value={email} onChange={(f) => setemail(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="birthdate">D-O-B</label>
                        <input type="date" id="birthdate" name="birthdate" value={birthdate} onChange={(f) => setbirthdate(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="aadhar">Aadhar No</label>
                        <input type="number" id="aadhar" name='aadhar' value={aadhar} onChange={(f) => setaadhar(f.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="insitute">Institute</label>
                        <input type="text" id='institute' name='institute' placeholder='your institute name' value={institute} onChange={(f) => setinstitute(f.target.value)} />
                    </div>
                    <div>
                        <input type="radio" id='male' name='gender' /> <label htmlFor="gender" id='m1'>Male</label>
                        <input type="radio" id='female' name='gender' value={gender} onChange={(f) => setgender(f.target.value)} /> <label htmlFor="gender" id='f1'>Female</label>
                    </div>
                    <div>
                        <input type="checkbox" id='terms' name='terms' value={gender} onChange={(f) => setgender(f.target.value)} /> <label htmlFor="terms" id='t1'>Terms & Conditions</label>
                    </div>

                    <button>Add User</button>
                </form>
            </main>
        </div>
    );
}

export default UserForm;