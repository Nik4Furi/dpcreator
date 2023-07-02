import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();

    //---------------- State Specific Stuff -----------------------X
    const [form, setForm] = useState({ email: '', password: '' })

    const [loading, setLoading] = useState(false); //Loading a button upto our work is not done

    //handle onchange event
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    //--------------------- Function to login the users after the checks-----------X
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        //------ Now call the api to login the user
        const res = await fetch(`${import.meta.env.VITE_LOCAL_API}/api/user/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(form)
        })
        const data = await res.json();

        console.log('check the data ', data);

        if (!data) {
            toast.warning("Check your connection or data");
            setLoading(false);
            return;
        }

        if (data.success == true) {
            //Now set the token as a session storage 
            sessionStorage.setItem('token',data.token);

            toast.success(`${data.msg}`);
            navigate('/');
            setLoading(false);
            return;
        }
        else if (data.success == false) {
            toast.error(`${data.msg}`);
            navigate('/login');
            setLoading(false);
            return;
        }

    }
    return (
        <>

            <section id="Login" className="bg-primary m-0 p-0" style={{ minHeight: "80vh",zIndex:'10' }}>
                <div className="container my-3">
                    <h2>Login to your account, can watch your uploaded images</h2>
                    <p> <span className="text-highlight"> Upload something new is never exist yet! </span> </p>
                    <form method='post' onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email: </label>
                            <input type="email" className="form-control" id="email" name='email' required minLength={5} maxLength={150} onChange={(e) => handleChange(e)} value={form.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password: </label>
                            <input type="password" className="form-control" name='password' required minLength={8} maxLength={12} id="password" onChange={(e) => handleChange(e)} value={form.password} />
                        </div>

                        <div className="d-flex align-items-center">
                            {/* <button className="btn btn-danger" >Login</button> */}
                            <button type="submit" className="btn btn-danger"><span className='d-flex align-items-center justify-content-center'> {loading ? <Loading /> : 'Login'} </span></button>

                            <span className='mx-2 fs-6'><Link to={'/register'}> <h5>Create A New Account</h5></Link></span>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Login
