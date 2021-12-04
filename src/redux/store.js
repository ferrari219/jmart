const { configureStore, createSlice } = require('@reduxjs/toolkit');

const redu = createSlice({
  name: 'redu',
  initialState: [],
  reducers: {
    add: (state, action) => {},
  },
});

const store = configureStore({ reducer: redu.reducer });

export default store;
