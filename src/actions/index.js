import {
  FETCH_ORGANISATION_MEMBERS,
  FETCH_ORGANISATION,
  FETCH_ORGANISATIONS
} from "../constants";

export function fetchOrganisations() {
  return {
    type: FETCH_ORGANISATIONS,
    payload: {
      request: {
        url: "/organizations"
      }
    }
  };
}
export function fetchOrganisation(name) {
  return {
    type: FETCH_ORGANISATION,
    payload: {
      request: {
        url: `/orgs/${name}`
      }
    }
  };
}

export function fetchOrganisationMembers(name) {
  return {
    type: FETCH_ORGANISATION_MEMBERS,
    payload: {
      request: {
        url: `/orgs/${name}/members`
      }
    }
  };
}
