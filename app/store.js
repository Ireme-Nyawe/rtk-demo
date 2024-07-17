const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceReducer = require("../features/iceCream/iceCreamSlice");
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceReducer,
  },
});
module.exports = store;
