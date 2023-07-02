import { createSlice } from "@reduxjs/toolkit";


const ShowImgSlice = createSlice({
    name: 'showimg',
    initialState: [],
    reducers: {
        showImg(state, action) {
            state.unshift(action.payload);

            if(state.length > 1){

                state.pop();
            }
        }
    }

})

export const { showImg } = ShowImgSlice.actions;
export default ShowImgSlice.reducer;

//----------------------- Call the api to show one image and update the views------------------X
export const ShowImg = (id) => async (dispatch, getstate) => {
    try {
        const token = sessionStorage.getItem('token');

        const res = await fetch(`${import.meta.env.VITE_LOCAL_API}/api/user/show/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                "auth-token": token
            }
        })

        const data = await res.json();

        console.log('check data to show ', data.usersImgs[0].uploadImg[0]._id);
        const pop = getstate();
        console.log('check get state is ', pop.showimg.length);

        dispatch(showImg(data.usersImgs[0].uploadImg[0]));


    } catch (error) {
        console.log('error occured  during show img ', error);
    }
}
