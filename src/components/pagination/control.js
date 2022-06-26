import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import Character from '../Character';
import PageView from './pages/index';

export default class PageControl extends Component {
  componentDidMount() {
    const { fetchItems, itemsCurrentPage } = this.props;
    fetchItems(itemsCurrentPage);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  
  handleNext() {
    const { fetchItems, itemsCurrentPage } = this.props;
    fetchItems(itemsCurrentPage + 1);
  }
  handlePrevious() {
    const { fetchItems, itemsCurrentPage } = this.props;
    fetchItems(itemsCurrentPage - 1);
  }
  render() {
    const {
      itemsPaged,
      itemsCurrentPage,
      itemsErrored,
      itemsLastPage,
      itemsRequested,
    } = this.props;
    if (itemsRequested) return <div>Requested</div>;
    if (itemsErrored) return <div>Errored</div>;
    return (
      <Character
        onNext={this.handleNext}
        onPrevious={this.handlePrevious}
        itemsPaged={itemsPaged}
        itemsCurrentPage={itemsCurrentPage}
        itemsLastPage={itemsLastPage}
      />
    );
  }
}
PageControl.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  itemsPaged: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  itemsCurrentPage: PropTypes.number.isRequired,
  itemsErrored: PropTypes.bool.isRequired,
  itemsLastPage: PropTypes.number.isRequired,
  itemsRequested: PropTypes.bool.isRequired,
};
