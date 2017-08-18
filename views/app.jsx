import React from 'react';

const SimpleLineChart = React.createClass({
    render () {
    return (
        <LineChart type="linear" width={600} height={300} data={stockData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="SPY" stroke="#82ca9d" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="AAPL" stroke="#ffddcc" />
        <Line type="monotone" dataKey="JPM" stroke="#ffc658" />
        <Line type="monotone" dataKey="IBM" stroke="#8884d8" />
        </LineChart>
    );
  }
})

export default class StockTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: []};
  }


  render() {
      return <div>
        <h2>Stock Table</h2>
        <table>
          <thead>
            <th>Date</th>
            <th>SPY</th>
            <th>AAPL</th>
            <th>JPM</th>
            <th>IBM</th>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    });
  }
}

export default React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      data: {},
    };
  },

  render() {
    return (
      <div>
      <h1>Hello</h1>
      </div>
    );
  }
});
