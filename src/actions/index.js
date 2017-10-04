import { FETCH_ORGANISATION, FETCH_ORGANISATIONS } from "../constants";

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
