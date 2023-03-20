import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";


// Initial state
const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: "",
};


// Async Thunk
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const tags = await getTags();
    return tags;
})


// Create Slice
const tagSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {

                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTags.fulfilled, (state, action) => {

                state.isLoading = false;
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {

                state.isLoading = false;
                state.tags = [];
                state.isError = true;
                state.error = action?.error?.message;
            })
    }
});


export default tagSlice.reducer;