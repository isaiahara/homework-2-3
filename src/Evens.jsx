import React from 'react';
import { Page2 } from './Page_2';
import { Page4 } from './Page_4';
export class Evens extends React.Component {
  render() {
    return(
      <div> 
        <Page2/>
        <Page4/>
      </div>
    )
  }
}