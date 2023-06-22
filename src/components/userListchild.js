const UserListChild = (props) => {
    let userdata = props.data
    let functiondata = props.funcdata

    let deleteFn = (id) => {
        functiondata(userdata.filter((item) => item.id !== id))
    }
    return (
        <div className="userlistchild">

            {
                userdata.map((value) => {
                    return (
                        <div className="infobox">
                            <p><b></b> {value.SrNo}</p>
                            <p><b>Name :</b> {value.name}</p>
                            <p><b>E-mail :</b> {value.email}</p>
                            <p><b>D.O.B. :</b> {value.birthdate}</p>
                            <p><b>Aadhar :</b> {value.aadhar}</p>
                            <p><b>Institute :</b> {value.institute}</p>
                            <p><b>Gender :</b> {value.gender}</p>
                            <button onClick={() => deleteFn(value.id)}>Delete User</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default UserListChild;