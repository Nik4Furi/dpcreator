import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const Register = () => {
    const navigate = useNavigate();

    //------------------ States Specific Stuff --------------------X
    const [form,setForm] = useState({name: '',email:'',password:'',cpassword:''}) //To store the form data

    const [loading,setLoading] = useState(false); //Loading a button upto our work is not done

    //----------------------- Functions to handle on change event on the inputs-------------------X
    const handleChange = (e)=> setForm({...form,[e.target.name]:e.target.value});

    //--------------------- Function to register the users with valid credentials -------------------X
    const handleSubmit = async(e)=>{
        e.preventDefault(); 

        setLoading(true);

        //Check password and confirm password match
        if(form.password !== form.cpassword){

            toast.warning(" Password and Confrim Password didn't match");
                
            setForm({name:form.name,email:form.email,password:'',cpassword:''})

            setLoading(false);

            return;
        }

        // Now call the api to register the users
        const res = await fetch(`${import.meta.env.VITE_LOCAL_API}/api/user/register`,{
            method : 'POST',
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(form)
        })
        const data = await res.json();
        console.log('check the data ',data);

        if (!data) {
            toast.warning("Check your connection or data");
            setLoading(false);
            return;            
        }

        if(data.success == true){
            toast.success(`${data.msg}`);
            navigate('/login');
            setLoading(false);
            return;
        }
        else if(data.success == false){
            toast.error(`${data.msg}`);
            navigate('/register');
            setLoading(false);
            return;
        }
    }

    return (
        <>
        <section id="Register " className='bg-primary m-0 p-0' style={{minHeight:"80vh",zIndex:'10'}}>

            <div className="container my-3 " >
                <h1>Welcome in our community to build strong and big</h1>
                <p>Here you can upload your images with description and title</p>
                {/* <p>Here you can upload your images with description and titles also can share as public and private also to watch can others</p> */}
                <form method='post' onSubmit={(e) => handleSubmit(e)} >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name: </label>
                        <input type="text" className="form-control" id="name" name='name' required minLength={5} maxLength={150} onChange={(e)=> handleChange(e)} placeholder='John Doe'  value={form.name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email: </label>
                        <input type="email" className="form-control" id="email" name='email' required minLength={12} maxLength={350} placeholder='johndoe@gmail.com'  onChange={(e)=> handleChange(e)} value={form.email}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password: </label>
                        <input type="password" className="form-control" name='password' required minLength={8} maxLength={450} id="password"  placeholder='**********' onChange={(e)=> handleChange(e)} value={form.password}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Re-enter Password:</label>
                        <input type="password" className="form-control" name='cpassword' required minLength={8} maxLength={450} id="cpassword" placeholder='**********' onChange={(e)=> handleChange(e)} value={form.cpassword}/>
                    </div>

                    <div className="d-flex align-items-center">
                        {/* <button className="btn btn-danger">Register</button>  */}
                        <button type="submit" className="btn btn-danger"><span className='d-flex align-items-center justify-content-center'> {loading ? <Loading /> : 'Register'} </span></button>
                    {/* <button type="submit" className="btn btn-primary"><span className='d-flex align-items-center justify-content-center'> {loading ? <Loading /> : 'Register'} </span></button> */}
                    <span className='mx-2 fs-6'><Link to={'/login'}> <h5>Have Already Account</h5></Link></span></div>
                </form>
            </div>

            </section>
        </>
    )
}

export default Register
