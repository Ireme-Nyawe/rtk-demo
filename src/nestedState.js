import { createStore } from "redux";
const initialState = {
  name: "InOnO",
  address: {
    street: "kj",
    city: "kg",
    state: "rw",
  },
};
const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial State", initialState);
const unsubscribe = store.subscribe(() =>
  console.log("updated state ", store.getState())
);
store.dispatch(updateStreet("kk-12"));
unsubscribe();
