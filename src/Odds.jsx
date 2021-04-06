import React from 'react';
import { Page1 } from './Page_1';
import { Page3 } from './Page_3';
export class Odds extends React.Component {
  render() {
    return(
      <div>
        <Page1/> 
        <Page3/>
      </div>
    )
  }
}