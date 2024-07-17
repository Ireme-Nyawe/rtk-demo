const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;
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
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCream--;
    });
  },
});

module.exports = iceSlice.reducer;
module.exports.iceActions = iceSlice.actions;
