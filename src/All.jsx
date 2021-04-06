import React from 'react';
import { Page1 } from './Page_1';
import { Page2 } from './Page_2';
import { Page3 } from './Page_3';
import { Page4 } from './Page_4';
export class All extends React.Component {
  render() {
    return(
      <div>
        <Page1/> 
        <Page2/>
        <Page3/>
        <Page4/>
      </div>
    )
  }
}