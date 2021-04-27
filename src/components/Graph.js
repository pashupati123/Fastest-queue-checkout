import React from 'react';
import {HorizontalBar,defaults} from 'react-chartjs-2';
import Select from './SelectStore'


export default class barchart extends React.Component {
  render() {
    return (
        <div>
            <Select /> 
            <HorizontalBar data={this.props.state} />
        </div>
    );
  }
}
