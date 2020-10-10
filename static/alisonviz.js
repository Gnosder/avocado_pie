function viz2(){
    //-----------------------------------------------------------------
    // Use D3 fetch to read the JSON file
    // The data from the JSON file is arbitrarily named importedData as the argument
    d3.json("/avocadoData").then((importedData) => {
      // console.log(importedData);
      var data = importedData;
      // Sort the data array using the total volume value
      data.sort(function(a, b) {
        return parseFloat(b.year) - parseFloat(a.year);
      });
  
  
      // Reverse the array due to Plotly's defaults
      data = data.reverse();
  
      // Trace1 bar plot 
      var trace1 = {
        x: data.map(row => row.year),
        y: data.map(row => row.PLU4046),
        text: data.map(row => row.year),
        name: "HassSmall",
        type: "bar"
      };
  
      // Trace2 line plot 
      var trace2 = {
        x: data.map(row => row.year),
        y: data.map(row => row.PLU4225),
        text: data.map(row => row.year),
        name: "HassLarge",
        type: "bar",
        // orientation: "h"
      };
  
      // Trace3 line plot 
      var trace3 = {
        x: data.map(row => row.year),
        y: data.map(row => row.PLU4770),
        text: data.map(row => row.year),
        name: "HassAllSizes",
        type: "bar",
        // orientation: "h"
      };
  
      // Trace4 line plot 
      //  var trace4 = {
      //   x: data.map(row => row.year),
      //   y: data.map(row => row.TotalVolume),
      //   text: data.map(row => row.year),
      //   name: "Hass Large",
      //   type: "line",
      //   // orientation: "h"
      // };
  
      // data
      var chartData = [trace1, trace2, trace3];
  
  
      // Apply the group bar mode to the layout
      // var layout = {
      //   title: "Total Volume Avocados Sold",
      //   barmode: 'stack',
      //   margin: {
      //     l: 100,
      //     r: 100,
      //     t: 100,
      //     b: 100
      //   }
      // };
  
      var layout = {
        title: {
          text:'Avocado Sizes Sold',
          font: {
            family: 'Courier New, monospace',
            size: 24
          },
          xref: 'Year',
          x: 0.05,
        },
        // barmode: 'stack',
        xaxis: {
          title: {
            text: 'Year',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
        yaxis: {
          title: {
            text: '# of Avocados Sold',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      };
      
  
      // Render the plot to the div tag with id "plot"
      Plotly.newPlot("plot", chartData, layout);
    });
    // --------------------------------------------------------------
    // --------------------------------------------------------------
  };
  