import {
  DATA_GET_FULFILLED,
  UPDATE_FAVORITES,
  UPDATE_FILTERED_APARTS,
  UPDATE_FILTERS,
} from "../constants/constants";

const initialState = {
  data: {
    aparts: [],
    filteredaparts: [],
  },
  filters: {
    address: "",
    operation_type: 0,
    activeSearch: false,
  },
  favorites: [],
};

const aparts = (state = initialState, action) => {
  switch (action.type) {
    case DATA_GET_FULFILLED: {
      return {
        ...state,
        data: {
          ...state.data,
          aparts: action.payload,
        },
      };
    }

    case UPDATE_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          address: action.payload.address,
          operation_type: action.payload.operation_type,
          activeSearch: action.activeSearch,
        },
      };
    }

    case UPDATE_FILTERED_APARTS: {
      return {
        ...state,
        data: {
          ...state.data,
          filteredPosts: action.payload,
        },
      };
    }

    case UPDATE_FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }
    default:
      return state;
  }
};

export default aparts;
