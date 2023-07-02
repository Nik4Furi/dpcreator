import { configureStore } from "@reduxjs/toolkit";
import ImgSlice from "./ImgSlice";
import ShowImgSlice from "./ShowImgSlice";


const Store = configureStore({
    reducer : {
        uploadimg : ImgSlice,
        showimg : ShowImgSlice
    }
})

export default Store;