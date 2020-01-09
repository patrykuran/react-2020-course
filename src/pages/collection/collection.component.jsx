import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({match}) => {
  console.log(match)
  return (
    <div className='collection-page'>
      <h2 className='title'>title {match.params.categoryId}</h2>
      <div className='items'>
      </div>
    </div>
  );
};

export default connect()(CollectionPage);
