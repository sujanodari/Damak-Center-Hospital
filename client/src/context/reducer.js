//data layer logic

export const initialState = {
  me: null,
  patient:[]
};

export const actionTypes = {
  SET_ME: "SET_ME",
  SET_PATIENT: "SET_PATIENT"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_ME:
      return {
        ...state,
        me: action.me,
      };
      case actionTypes.SET_PATIENT:
        return {
          ...state,
          patient: action.patient,
        };
    default:
      return state;
  }
};
export default reducer;
