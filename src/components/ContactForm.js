import React,{useState,useEffect} from 'react';
import './ContactForm.css';
import contactImage from './Images/contactBackground.jfif'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Authorization'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


function ContactForm() {

    // const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [name,setname] = useState('');
    const [number,setNumber] = useState('');
    const [question,setQuestion] = useState('');
    const [subject,setSubject] = useState();
    const [authTotal,setauthTotal] = useState('');
    const [random_1,setRandom_1] = useState();
    const [random_2,setRandom_2] = useState();

    useEffect(()=>{
        setRandom_1(Math.floor((Math.random() * 10) + 1));
        setRandom_2(Math.floor((Math.random() * 10) + 1));
    },[])
    


    const submit = ()=>{

        if(!name){
            return alert("Please provide your name");
        }
        if(!email){
            return alert("Please provide your email");
        }
        if(!number){
            return alert("Please provide your mobile number");
        }

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            return alert("Email is invalid");
        }

        if(!question){
            return alert("Please provide your query");
        }

        if(!authTotal){
            return alert("Please fill the captcha");
        }

        if(random_2 + random_1 === parseInt(authTotal)){

            return axios.post('/api/contactUs/',{
                name:name,
                email:email,
                mobileNo:number,
                query:question,
                subject:subject
            }).then((res)=>{
                setname("");
                setEmail("");
                setQuestion("");
                setNumber("");
                setauthTotal("")
                setSubject("")
                alert("Query received , we will soon getback to you");
            })
        }else{
            alert("Please fill the right captcha");
        }


    }



    return (
        <div className="contact-form">
           {/* <img className="contact-bg" width="100%" height="100%" src={contactImage} alt="contact-here"/> */}
           <div className="form">
               <div className='form-header'>
                   <span id="form-header-1">BEGAIN YOUR NEW PROJECT</span><br/>
                   <span id="form-header-2">Fill out the form & we'll be in touch soon!</span>
               </div>
               <div className='form-inputs'>
                    <input placeholder="Name" className="form-input" type="text" onChange={(e)=>setname(e.target.value)} value={name}/>
                    <input placeholder="Email" className="form-input" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <input placeholder="Phone no" className="form-input" type="tel" onChange={(e)=>setNumber(e.target.value)} value={number}/>
                    <input placeholder="Subject" className="form-input" type="text" onChange={(e)=>setSubject(e.target.value)} value={subject}/>

               </div>
               {/* <input placeholder="Name" className="form-input" type="text" onChange={(e)=>setName(e.target.value)} value={name}/> */}
               <textarea placeholder="Question" rows="6" cols="50" className="form-input-query" onChange={(e)=>setQuestion(e.target.value)} value={question}/>

                <div id="human-auth">
                    <span id="auth-total-input">
                        <span>{random_1} +{random_2}</span>
                        <input placeholder='Total*' value={authTotal} onChange={(e)=>setauthTotal(e.target.value)} />
                    </span>
                    <p>(Are you human, or spambot?)</p>
                </div>

               <button onClick={()=>submit()} className="contact-submit">Submit</button>
           </div>
        </div>
    )
}

export default ContactForm
