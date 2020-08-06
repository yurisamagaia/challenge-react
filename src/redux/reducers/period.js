const initialState = {
  selectedPeriod: "triennially",
  selectedPlan: "Plano P"
};

export const period = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PERIOD":
      return { ...state, selectedPeriod: action.value };
    case "SET_PLANS":
      return { ...state, selectedPlan: action.value };
    default:
      return state;
  }
};