import { createSlice } from "@reduxjs/toolkit";


const ImgSlice = createSlice({
    name: 'uploadimg',
    initialState: [],
    reducers: {
        //Set the uploaded images
        setImages(state, action) {
            state = state.push(action.payload);
        },
        
    }
})

export const { setImages } = ImgSlice.actions;
export default ImgSlice.reducer;

//----------------------- Call the api to fetching the uploaded images
export const ShowAllImgs = () => async (dispatch) => {
    try {
        const token = sessionStorage.getItem('token');

        const res = await fetch(`${import.meta.env.VITE_LOCAL_API}/api/user/show`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": token
            }
        })

        const data = await res.json();

        // console.log('check the data to fetch the image ',data);

        if (!data) throw new Error("Images not fount ");

        dispatch(setImages(data.usersImgs[0].uploadImg));

    } catch (error) {
        console.log('Error occured during show images ', error);
    }
}

//----------------------- Call the api to upload a new image
export const UploadImg = (content) => async (dispatch,getstate) => {
    try {
        const token = sessionStorage.getItem('token');
        // console.log('check the content ',content);
        const res = await fetch(`${import.meta.env.VITE_LOCAL_API}/api/user/upload`, {
            method: 'POST',
            headers: {
                // 'Content-Type' : 'multipart/form-data',
                "auth-token": token
            },
            body: content
        })

        const data = await res.json();

        console.log('check the data to upload the image ', data);

        if (!data) throw new Error("Images not found ");
        const pop = getstate();
        console.log('check gestatst ',pop);

        // dispatch(setImages(data.usersImgs[0].uploadImg));

    } catch (error) {
        console.log('Error occured during upload images ', error);
    }
}

