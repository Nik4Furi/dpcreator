import React, { useState } from 'react'

//-------------- Packages----------
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

//------------- States
import { useDispatch } from 'react-redux';
import { UploadImg } from '../Store/ImgSlice';

//-------------- Components
import Loading from '../components/Loading';

const AddImage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //---------------- State Specific Stuff -----------------------X
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [file,setFile] = useState('');

    const [loading, setLoading] = useState(false); //Loading a button upto our work is not done

    //--------------------- Function to AddImage the users after the checks-----------X
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        let myForm = new FormData();
        myForm.append('title',title);
        myForm.append('description',description);
        myForm.append('file',file);
       

        dispatch(UploadImg(myForm));

        toast.info('Please wait we check your file is uploading or not...');      

        setTimeout(() => {            
            navigate(0)
            // navigate('/')
        }, 3000);

        setDescription('');
        setFile('');
        setTitle('');

        setLoading(false);
    }


    return (
        <>

            <section id="AddImage" className="bg-primary m-0 p-0">
            {/* <section id="AddImage" className="bg-primary m-0 p-0" style={{ minHeight: "80vh", zIndex: '10' }}> */}
                <div className="container my-3">
                    <h2>AddImage a new image to watch later</h2>
                    <p> <span className="text-highlight"> Upload something new is never exist yet! </span> </p>
                    <form method='post' encType='multipart/form-data'  onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title: </label>
                            <input type="text" className="form-control" id="title" name='title' required minLength={5} maxLength={150} onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="file" className="form-label">Upload Image: </label>
                            <input type="file" className="form-control" id="file" name='file' accept='image/png image/jpg image/gif image/jpeg image/svg' required  onChange={(e) => setFile(e.target.files[0])} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description: </label>
                            <textarea className="form-control" name='description' required minLength={8} maxLength={120} id="description" onChange={(e) => setDescription(e.target.value)} value={description} rows="3"></textarea>
                        </div>

                     

                        <div className="d-flex align-items-center">
                            {/* <button className="btn btn-danger" >AddImage</button> */}
                            <button type="submit" className="btn btn-danger"><span className='d-flex align-items-center justify-content-center'> {loading ? <Loading/> : 'Upload'} </span></button>

                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default AddImage
