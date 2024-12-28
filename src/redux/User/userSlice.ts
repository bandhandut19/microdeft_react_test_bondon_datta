import { IStoredUserData } from "@/types/loginType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IStoredUserData = {
  token: "",
  userDetails: {
    id: "",
    name: "",
    email: "",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLoggedUserToken: (state, action: PayloadAction<IStoredUserData>) => {
      const token = action.payload.token;
      state.token = token;
      state.userDetails.id = action.payload.userDetails.id;
      state.userDetails.name = action.payload.userDetails.name;
      state.userDetails.email = action.payload.userDetails.email;
    },
    removeLoggedUserToken: (state) => {
      state.token = "";
      state.userDetails.id = "";
      state.userDetails.name = "";
      state.userDetails.email = "";
    },
  },
});

export const { addLoggedUserToken, removeLoggedUserToken } = userSlice.actions;
export default userSlice.reducer;
