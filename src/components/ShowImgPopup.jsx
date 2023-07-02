import React from 'react'

import { useSelector } from 'react-redux';

function ShowImgPopup({ modalRef }) {

    const ImgData = useSelector((state) => state.showimg);

    return (
        <>
            {/* Used to open the modal  */}
            <button type="button" ref={modalRef} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#ShowImgModal"> </button>

            <div className="modal fade" id="ShowImgModal" tabIndex="-1" aria-labelledby="ShowImgModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ShowImgModalLabel">Show Img</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>

                        {/* Modal body, where we show the items  */}
                        <div className="modal-body">
                            {
                                ImgData
                                    ? ImgData.map((item) => {
                                        return <div key={item._id} className="card mb-3" style={{ maxWidth: "540px" }}>
                                            <div className="row g-0">
                                                <div className="col-md-4" >
                                                    <img src={item.img.url} className="img-fluid rounded-start" alt="upload img" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.title}</h5>
                                                        <p className="card-text">{item.description}.</p>
                                                        <p className="card-text"><small className="text-body-secondary">views: <strong className='text-highlight' >{item.views}</strong></small></p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    })
                                    : "Please wait to load data"
                            }
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowImgPopup
