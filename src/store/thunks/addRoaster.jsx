import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addRoaster = createAsyncThunk('roaserters/add', async () => {
    const response = await axios.post('http://localhost:3005/roasters', {
        name: faker.name.fullName()
    });
    return response.data;
});

export {addRoaster};