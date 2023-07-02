import React, { useRef } from 'react'

//--------------- States------------
import { useDispatch } from 'react-redux'
import { ShowImg } from '../Store/ShowImgSlice';

//----------------- Components
import ShowImgPopup from './ShowImgPopup'


function ImgCart({ title, description, img, item }) {

    const dispatch = useDispatch();

    //------------------- function to open the image model ----------------X
    const modalRef = useRef(null);

    const handleImgModal = async (item) => {
        modalRef.current.click();

        dispatch(ShowImg(item._id));
    }


    return (
        <>

            {/* Show the image model when click on the card  */}
            <ShowImgPopup modalRef={modalRef} />


            <div onClick={() => handleImgModal(item)} className="card mx-2 my-2 p-0" style={{ width: "18rem", cursor: "pointer" }}>
                <img src={img} className="card-img-top" alt="Uploading Your image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                </div>
            </div>

        </>
    )
}

export default ImgCart
