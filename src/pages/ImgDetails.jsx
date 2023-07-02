import React from 'react'
import ImgCart from '../components/ImgCart'

function ImgDetails({title,description,views,img}) {
  return (
    <>
      <div className="container-fluid my-2">
        <h2>You can see your uploaded image details</h2>
        <p>Here you can see your all details of the image is required for you to watch</p>

        <div className="container my-2">
            <div className="row">
                  <div className="modal-body">
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={img} className="img-fluid rounded-start" alt="Upload a new image" />

                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title"> {title}</h5>
                                            <p className="card-text">{ description}</p>
                                            <p className="card-text"><small className="text-body-secondary">Views: <strong>{views}</strong></small></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ImgDetails
