import React from 'react';

import ContextContainer from './context';
import Firebase from './firebase'
import Routes from './routes'

export default Index = () => {
  return (
    <ContextContainer>
      <Firebase>
        <Routes />
      </Firebase>
    </ContextContainer>
  )
}