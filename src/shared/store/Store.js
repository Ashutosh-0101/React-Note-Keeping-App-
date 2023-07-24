import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from "../../modules/notes/redux/Note-Slice";

export default configureStore({
    reducer:{
        // key:value
        NoteSlice
    }
});