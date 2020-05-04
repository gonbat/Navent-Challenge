import {
  POSTS_FETCH_FULFILLED,
  UPDATE_FILTERED_POSTS,
  UPDATE_FAVORITES,
} from "../Actions/Types/posts";
import { UPDATE_FITLERS } from "../Actions/Types/search";

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

const posts = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCH_FULFILLED: {
      return {
        ...state,
        postings: {
          ...state.postings,
          posts: action.payload,
        },
      };
    }

    case UPDATE_FITLERS: {
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

    case UPDATE_FILTERED_POSTS: {
      return {
        ...state,
        postings: {
          ...state.postings,
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

export default posts;
