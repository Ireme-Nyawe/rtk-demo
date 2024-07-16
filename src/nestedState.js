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
