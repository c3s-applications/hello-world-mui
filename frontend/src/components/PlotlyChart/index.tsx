import React from 'react';
import Plot from 'react-plotly.js';
import defaultPlot from './default.json'


export class PlotlyChartInline extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
      />
    );
  }
}

export class PlotlyChartFromFile extends React.Component {
    render() {
        
      return (
        <Plot
          data={defaultPlot.data}
          layout={defaultPlot.layout}
        />
      );
    }
  }