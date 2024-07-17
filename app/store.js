const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceReducer = require("../features/iceCream/iceCreamSlice");

const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
module.exports = store;
