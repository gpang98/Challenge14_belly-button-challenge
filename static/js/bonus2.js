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
          // ... (your step definitions)
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
createGaugeChart(3); // Create the gauge chart with an initial washing frequency value of 3

// To update the gauge chart with a new washing frequency value, call:
// updateGaugeChart(newWashingFrequency);
