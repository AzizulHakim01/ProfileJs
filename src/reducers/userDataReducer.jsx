import { createSlice } from '@reduxjs/toolkit';
import { userData } from '../../data';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: { data: userData }, // Assuming your userData is an array
  reducers: {
    updateUserData: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.data.findIndex((user) => user.id === id);

      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedData };
      }
    },
  },
});

export const { updateUserData } = userDataSlice.actions;
export const selectUserData = (state) => state.userData.data; // Adjusted this line

export default userDataSlice.reducer;
