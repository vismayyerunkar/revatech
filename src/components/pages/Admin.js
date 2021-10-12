import React,{useState,useEffect} from 'react';
import './styles/Admin.css';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar';

function Admin() {
    
    const [queries,setQueries] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/api/contactUs').then((res)=>{
            console.log(res);
            setQueries(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <>
        <AdminNavbar/>
        <div className="Admin">
            <div className="clients-query-list">
                <h5 className="list-heading">Queries</h5>
                <div className="list-container">
                    {queries.map((query)=>{
                       return(
                        <div className="list-Item">
                            <span>{query.email}</span>
                            <div className="query-time-container">
                                <span>{query.createdAt.split('T')[0]}</span>
                                <span>{query.createdAt.split('T')[1]}</span>
                            </div>
                        </div>
                       )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin
