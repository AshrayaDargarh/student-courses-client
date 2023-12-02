import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "../components/Course/courseSlice";
import studentSlice from "../components/Student/studentSlice";

export const store=configureStore({
    reducer:{
        course:courseSlice,
        student:studentSlice
    }
})