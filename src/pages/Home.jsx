import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

//------------- States-----------
import { useDispatch, useSelector } from "react-redux";
import { ShowAllImgs } from '../Store/ImgSlice';

//------------ Components
import ImgCart from '../components/ImgCart'

function Home() {
  const dispatch = useDispatch();

  // ------------------- Show the images according to the users -------------------X
  useEffect(() => {
    dispatch(ShowAllImgs()); // Show all images from database
  },[dispatch])

  const imagesData = useSelector((state) => state.uploadimg);

  return (
    <>
      <div className="container my-3">

        <h2><span className="text-highlight text-capitalize"> dpCreators </span> is platform where users can upload their images, and save with title and description</h2>
        <p> helps the users to upload their pics with title and description and count their views in a particular images, it can help the users like, if needed to upload an image in twitter, instagram or any where ,can save with title and description and upload that time! </p>
        <p style={{background : "#dfdfce"}}><span className="text-danger">NOTE: </span>After upload a new image you need to <a href="/">refresh</a> it, I might be resolve this issue, but I haven't enough time to do it!, So Sorry  🙏 For This LOOPHOLE ➰</p>


        <div className="container my-2" style={{ minHeight: "50vh" }}>


          <h3>Check out your image stuff, and add something new is better than ever!</h3>
          <div className='position-relative'>
            <Link to='/upload'><button className="btn btn-danger my-2 mx-2">Add New Image</button></Link>
            
          </div>

          <h6>{ imagesData[0]?.length===0 ? "You haven't to show here, add now!" : ""}</h6>

          <div className="row">

            {/* Now show all the images here  */}
            {
              imagesData[0]
                ? imagesData[0].map((ele) => {
                  return <ImgCart key={ele.img?.public_id} title={ele.title} description={ele.description} img={ele.img?.url} item={ele} />
                })
                : "You have nothing to show here, Add Now!"
            }

            {/* <ImgCart title={"this is title "} description={"this is description"} />
            <ImgCart />
            <ImgCart />
            <ImgCart />
            <ImgCart /> */}
          </div>

        </div>

      </div>
    </>
  )
}

export default Home
