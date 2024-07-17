const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numOfIceCream: 15,
};
const iceSlice = createSlice({
  name: "ice",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
});

module.exports = iceSlice.reducer;
module.exports.iceActions = iceSlice.actions;
