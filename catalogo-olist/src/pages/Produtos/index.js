import React from 'react';
import './styles.css';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

export default function Produtos() {
  return (
    <>
      <Navigation />
      <div className='content'>
        <div className='page'>
          <Header title={'Produtos'} />
          <div className='wrapper'>

          </div>
        </div>
      </div>
    </>
  );
}
