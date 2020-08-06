const initialState = {};

export const plans = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLANS":
      return { ...state, selectedPlan: action.value };
    default:
      return state;
  }
};