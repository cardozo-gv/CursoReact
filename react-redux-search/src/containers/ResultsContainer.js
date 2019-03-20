import React, { Component } from 'react';
import Results from '../components/Results';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; /*permite acceder al history */


class ResultsContainers extends Component{
  render(){
    const { results } = this.props;

    return(
      <Results
        results ={results}
        goTo={(path) => this.props.history.push(path)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results : state.results,
  }
}

export default withRouter(
  connect(mapStateToProps)(ResultsContainers)
)
