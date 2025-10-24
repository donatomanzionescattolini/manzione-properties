import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchProperties = createAsyncThunk("properties/fetchAll", async () => {
    const res = await api.get("/properties");
    return res.data;
});

const propertySlice = createSlice({
    name: "property",
    initialState: { list: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProperties.pending, (state) => { state.loading = true; })
            .addCase(fetchProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            });
    }
});

export default propertySlice.reducer;
