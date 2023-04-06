import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeRoaster = createAsyncThunk('roasters/remove', async (roaster) => { 
    await axios.delete(`http://localhost:3005/roasters/${roaster.id}`);

    return roaster;
});

export { removeRoaster };