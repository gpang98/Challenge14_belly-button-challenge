// Function to create the gauge chart
function createGaugeChart(washingFrequency) {
  // Set up gauge chart data
  var data = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: washingFrequency,
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

// Function to update the gauge chart
function updateGaugeChart(washingFrequency) {
  // Use Plotly.react to update the chart
  Plotly.react("gauge", [{ value: washingFrequency }], {
    title: { text: "Weekly Washing Frequency" },
  });
}

// Sample usage:
// createGaugeChart(3); // Create the gauge chart with a washing frequency value of 3
// updateGaugeChart(6); // Update the gauge chart with a washing frequency value of 6
