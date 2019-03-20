import React, { Component } from 'react';
import Details from '../components/Details';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; /*permite acceder al history  y a match*/
import findCurrentItem from  '../redux/actions/findCurrentItem';


class DetailsContainers extends Component{
  componentDidMount(){
      this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
  }

  render(){
    const { currentItem } = this.props;

    return(
      <Details
        currentItem ={currentItem}
        goTo={(path) => this.props.history.push(path)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem : state.currentItem,
  }
}

const mapDispatchToProps = {
    findCurrentItem,
}

export default withRouter(
  connect(mapStateToProps,mapDispatchToProps )(DetailsContainers)
)
