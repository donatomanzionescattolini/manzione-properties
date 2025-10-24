import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchTenants = createAsyncThunk("tenants/fetchAll", async () => {
    const res = await api.get("/tenants");
    return res.data;
});

const tenantSlice = createSlice({
    name: "tenant",
    initialState: {list: [], loading: false},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTenants.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTenants.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchTenants.rejected, (state) => {
                state.loading = false;
            });
    }
});

export default tenantSlice.reducer;