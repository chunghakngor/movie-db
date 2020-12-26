export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.target]: action.value,
      };

    case "SET_RESULT":
      return {
        ...state,
        isError: "",
        isLoading: false,
        showModal: false,
        result: action.value,
      };

    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "ERROR":
      return {
        ...state,
        isLoading: false,
        showModal: true,
        isError: action.value,
        result: [],
      };

    case "RESET":
      return {
        isLoading: false,
        isError: "",
        showModal: false,
        query: "",
        result: [],
      };

    case "REMOVE_MOVIE":
      state.result.splice(
        state.result.findIndex((m) => m.id === action.value),
        1
      );
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
