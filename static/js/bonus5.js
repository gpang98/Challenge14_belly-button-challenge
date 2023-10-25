function createGaugeChart(washingFrequency) {
  // Set up gauge chart data
  var data = [
    {
      type: "indicator",
      mode: "gauge+number",
      title: { text: "Weekly Washing Frequency", font: { size: 18 } },
      gauge: {
        axis: { range: [0, 9], tickmode: "array", tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        bar: { color: "darkred" },
        steps: [
          { range: [0, 1], color: "rgba(0, 255, 0, 0.25)" },
          { range: [1, 2], color: "rgba(0, 255, 0, 0.5)" },
          { range: [2, 3], color: "rgba(0, 255, 0, 0.75)" },
          { range: [3, 4], color: "rgba(0, 255, 0, 1)" },
          { range: [4, 5], color: "rgba(100, 255, 0, 0.25)" },
          { range: [5, 6], color: "rgba(100, 255, 0, 0.5)" },
          { range: [6, 7], color: "rgba(100, 255, 0, 0.75)" },
          { range: [7, 8], color: "rgba(100, 255, 0, 1)" },
          { range: [8, 9], color: "rgba(255, 0, 0, 0.25)" },
        ],
        shape: "angular", // Add the dial shape
      },
    },
  ];

  // Set up gauge chart layout
  var layout = {
    width: 400,
    height: 300,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "lavender",
  };

  // Create the gauge chart
  Plotly.newPlot("gauge", data, layout);
}


function updateGaugeChart(washingFrequency) {
  var update = {
    value: washingFrequency
  };

  Plotly.update("gauge", update);
}

// Sample usage:
createGaugeChart(3);
