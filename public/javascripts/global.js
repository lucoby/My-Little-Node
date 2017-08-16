// Stocklist data array for filling in info box
var stockListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/stocks/stocklist', function( data ) {

        stockListData = data

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
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