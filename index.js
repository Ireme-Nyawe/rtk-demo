const store = require("./app/store");
const cakeActions = require('./features/cake/cakeSlice').cakeActions
console.log("initial state:", store.getState());
const subs = store.subscribe(() => {
  console.log("updated state:", store.getState());
});
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

subs()