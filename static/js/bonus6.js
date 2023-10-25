function createGaugeChart(washingFrequency) {
  // Define a custom rainbow color scale
  const rainbowColors = [
    "violet", "indigo", "blue", "green", "yellow", "orange", "red"
  ];

  // Set up gauge chart data with a rainbow color scale
  var data = [
    {
      type: "indicator",
      mode: "gauge+number",
      title: { text: "Weekly Washing Frequency", font: { size: 18 } },
      gauge: {
        axis: { range: [0, 9], tickmode: "array", tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        bar: { color: "darkred" },
        steps: rainbowColors.map((color, index) => ({
          range: [index, index + 1],
          color: color
        })),
        shape: "angular",
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
