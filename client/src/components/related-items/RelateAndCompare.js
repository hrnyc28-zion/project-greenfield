import React from 'react';
import RelatedProducts from './RelatedProducts';
import YourOutfit from './YourOutfit';
import ComparisonModal from './ComparisonModal';

class RelateAndCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RelatedProducts />
        <YourOutfit />
        <ComparisonModal />
      </div>
    );
  }
}

export default RelateAndCompare;
