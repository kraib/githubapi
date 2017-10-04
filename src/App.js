import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import "./App.css";
import { main } from "./selectors";
import { fetchOrganisation, fetchOrganisations } from "./actions";
import Search from "./components/Search";
import Result from "./components/SearchResult";

const mapStateToProps = createSelector([main], main => ({
  main
}));
class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchOrganisations());
  }
  fetchOrganisation(text) {
    this.props.dispatch(fetchOrganisation(text));
  }
  render() {
    return (
      <div className="wrap">
        <Search onChange={text => this.fetchOrganisation(text)} />
        {this.props.main.error ? (
          <div className="alert alert-danger" role="alert">
            <a href="#" className="alert-link">
              {this.props.main.errorMessage}
            </a>
          </div>
        ) : (
          false
        )}
        {this.props.main.fetching
          ? "Loading..."
          : this.props.main.data.map(organization => (
              <Result
                link={organization.url}
                description="Empty Organization Description"
                name={organization.login}
              />
            ))}
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
