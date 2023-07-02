import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import ShowImgPopup from './ShowImgPopup'

import { ShowImg } from '../Store/ShowImgSlice';



function ImgCart({ title, description, img, item }) {

    const dispatch = useDispatch();

    //------------------- function to open the image model ----------------X
    const [newItem, setNewItem] = useState({ title: '', description: '', img: '', views: '' });
    const modalRef = useRef(null);

    const handleImgModal = async (item) => {
        console.log('check the items ', item, typeof (item));
        modalRef.current.click();

        // setNewItem(item);

        dispatch(ShowImg(item._id));
    }


    return (
        <>

            {/* Show the image model when click on the card  */}
            <ShowImgPopup modalRef={modalRef} newItem={newItem} />

          

            <div onClick={() => handleImgModal(item)} className="card mx-2 my-2 p-0" style={{ width: "18rem", cursor: "pointer" }}>
                <img src={img} className="card-img-top" alt="Uploading Your image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

        </>
    )
}

export default ImgCart
