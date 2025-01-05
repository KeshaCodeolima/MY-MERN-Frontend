import React, { useEffect, useState } from "react";
import './UserDetailsPage.css';
import axios from "axios";
import { useNavigate} from "react-router-dom";

function UserDetailsPage(){

const[users,setUsers] = useState([]);
const navigate = useNavigate();

const fetdata = async()=>{
    axios.get('http://localhost:3001/userdetails')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
}

useEffect(()=>{
    fetdata();
},[])

const deleteUser =(email)=>{
    axios.delete(`http://localhost:3001/userdetails/${email}`)

    .then(res=>{console.log(res.data);
        fetdata();
        alert('You want to Deleted this User')
    })
    .catch(error=>console.log(error))
    
}

const exit =()=>{
    navigate('/login')
}
    return(
    <>
    <div className="main1">
        <div className="box1">
            <table className="table">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>{
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phonenumber}</td>
                                <td><button className="delet" onClick={()=>deleteUser(user.email)}>DELETE</button> </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <button className="exit" onClick={exit}>EXIT</button>
        </div>
    </div>
    </>
    )
}
export default UserDetailsPage