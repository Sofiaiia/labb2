import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "default",
    points: 0,
    questions: 0,
    time: 0,
    //nån sorts koll på när resutatet är klart att hämta för listan
};

export const resultSlice = createSlice({
    name: 'results',
    initialState,
    reducers:{
        //öka poäng 
        incrementPoint: (state) => {
            state.points += 1;
        },
        //sätta antal frågor
        numOfQuestions: (state,action) => {
            state.questions = action.payload;
        },
        //sätta namnet 
        setName: (state,action) => {
            state.name = action.payload;
        },
        //sätta timern 
        setTime: (state,action) => {
            state.time = action.payload;
        },
    },
});

//här sätts namnet på reducerna in, som defineras ovan 
export const {incrementPoint,numOfQuestions,setName,setTime} = resultSlice.actions;

//selectors för alla delar av statet
export const selectName = (state) => state.results.name;
export const selectPoints = (state) => state.results.points;
export const selectQuestions = (state) => state.results.questions;
export const selectTime = (state) => state.results.time;

export default resultSlice.reducer;