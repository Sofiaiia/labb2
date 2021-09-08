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
        //sätta antal frågor
        //sätta namnet 
        //sätta timern 
    },
});

//här sätts namnet på reducerna in, som defineras ovan 
export const {} = resultSlice.actions;

//selectors för alla delar av statet
export const selectName = (state) => state.results.name;
export const selectPoints = (state) => state.results.points;
export const selectQuestions = (state) => state.results.questions;
export const selectTime = (state) => state.results.time;

export default resultSlice.reducer;