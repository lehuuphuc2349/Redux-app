import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "StarkLee" },
  { id: "1", name: "WhyAngel" },
  { id: "2", name: "SoiBaydan" },
  { id: "3", name: "William lIN" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
