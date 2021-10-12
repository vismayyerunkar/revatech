import React,{useState} from 'react'
import './AdminTestimonial.css'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';

function AdminTestimonial() {

    const [name,setName] = useState('');
    const [review,setReview] = useState('');
    const [image,setImage] = useState();

    const submitTestimonial =()=>{
        axios.post('http://localhost:5000/api/testimonials/create/',{
            name:name,
            review:review,
            image:image
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <>
        <AdminNavbar/>
        <div className="admin-testimonial">
            <div className="testimonial-form">
                <h2 style={{margin:"10px"}}>Add Testimonial</h2>
                <input id="name-field" type="text" placeholder="Client Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <textarea id="review-field" name="comment" rows={8} placeholder="Review" value={review} onChange={(e)=>setReview(e.target.value)}></textarea>
                {/* <span id="client-image">Add Client Image</span>  */}
                <input type="file" name="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
                <span onClick={(e)=>submitTestimonial()} id="submitTestimonial">Submit</span> 
            </div>
        </div>
        </>
    )
}

export default AdminTestimonial
