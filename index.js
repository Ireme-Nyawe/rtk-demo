const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceActions = require("./features/iceCream/iceCreamSlice").iceActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;
console.log("initial state:", store.getState());
const subs = store.subscribe(() => {
  console.log("updated", store.getState());
});
store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceActions.ordered());
// store.dispatch(iceActions.ordered());
// store.dispatch(iceActions.restocked(2));

// subs();
