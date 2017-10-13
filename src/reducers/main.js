import {
  FETCH_ORGANISATION,
  FETCH_ORGANISATION_FAIL,
  FETCH_ORGANISATION_SUCCESS,
  FETCH_ORGANISATION_MEMBERS,
  FETCH_ORGANISATION_MEMBERS_FAIL,
  FETCH_ORGANISATION_MEMBERS_SUCCESS,
  FETCH_ORGANISATIONS,
  FETCH_ORGANISATIONS_FAIL,
  FETCH_ORGANISATIONS_SUCCESS
} from "../constants";

export default function appReducer(
  state = {
    fetching: false,
    data: [],
    error: false,
    errorMessage: "",
    members: {
      fetching: false,
      data: [],
      error: false,
      errorMessage: ""
    }
  },
  action
) {
  switch (action.type) {
    case FETCH_ORGANISATION: {
      return { ...state, fetching: true, error: false };
    }
    case FETCH_ORGANISATION_SUCCESS: {
      return {
        ...state,
        fetching: false,
        error: false,
        data: [action.payload.data]
      };
    }
    case FETCH_ORGANISATION_FAIL: {
      const message =
        action.error.response.data.message || "Failed to get organization";
      return {
        ...state,
        fetching: false,
        data: [],
        error: true,
        errorMessage: message
      };
    }
    case FETCH_ORGANISATION_MEMBERS: {
      const members = { ...state.members, fetching: true, error: false };
      return { ...state, members };
    }
    case FETCH_ORGANISATION_MEMBERS_SUCCESS: {
      const members = {
        ...state.members,
        fetching: false,
        error: false,
        data: action.payload.data
      };
      return { ...state, members };
    }
    case FETCH_ORGANISATION_MEMBERS_FAIL: {
      const message =
        action.error.response.data.message || "Failed to get organization";
      const members = {
        ...state.members,
        fetching: false,
        data: [],
        error: true,
        errorMessage: message
      };
      return { ...state, members };
    }
    case FETCH_ORGANISATIONS: {
      return { ...state, fetching: true, error: false };
    }
    case FETCH_ORGANISATIONS_SUCCESS: {
      console.log("data", action.payload.data);
      return {
        ...state,
        fetching: false,
        error: false,
        data: action.payload.data
      };
    }
    case FETCH_ORGANISATIONS_FAIL: {
      const message =
        action.error.response.data.message || "Failed to get organizations";
      return {
        ...state,
        fetching: false,
        data: [],
        error: true,
        errorMessage: message
      };
    }
    default: {
      return state;
    }
  }
}
