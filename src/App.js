import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import "./App.css";
import { main } from "./selectors";
import {
  fetchOrganisation,
  fetchOrganisations,
  fetchOrganisationMembers
} from "./actions";
import Search from "./components/Search";
import Result from "./components/SearchResult";
import MembersList from "./components/MembersList";

const mapStateToProps = createSelector([main], main => ({
  main
}));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false
    };
  }
  componentWillMount() {
    this.props.dispatch(fetchOrganisations());
  }
  fetchOrganisation(text) {
    this.props.dispatch(fetchOrganisation(text)).then(d => {
      this.setState({ searched: true });
      this.props.dispatch(fetchOrganisationMembers(text));
    });
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
        {this.state.searched && this.props.main.data.length > 0 ? (
          this.props.main.members.fetching ? (
            "Loading Members..."
          ) : (
            <MembersList members={this.props.main.members.data} />
          )
        ) : (
          false
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
