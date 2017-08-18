const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

// Stocklist data array for filling in info box
var stockData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

});

// Functions =============================================================

// Populate graph

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

ReactDOM.render(
  <SimpleLineChart />,
  document.getElementById('container')
);

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON('/stocks/stocklist', function(data) {

        stockData = data

        stockData.sort(function(a, b) {
            return Date.parse(a.date) - Date.parse(b.date);
        });

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function() {
            tableContent += '<tr>';
            tableContent += '<td>' + this.date + '</td>';
            tableContent += '<td>' + this.SPY + '</td>';
            tableContent += '<td>' + this.IBM + '</td>';
            tableContent += '<td>' + this.AAPL + '</td>';
            tableContent += '<td>' + this.JPM + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#stockList table tbody').html(tableContent);
    });
};