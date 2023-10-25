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
        bar: { color: "darkred" }, // Dial color (brown)
        steps: [
          { range: [0, 1], color: "rgba(255, 0, 0, 0.25)" }, // Light pink
          { range: [1, 2], color: "rgba(255, 0, 0, 0.5)" },  // Pink
          { range: [2, 3], color: "rgba(255, 0, 0, 0.75)" },  // Darker pink
          { range: [3, 4], color: "rgba(255, 100, 0, 0.25)" },  // Pink to orange transition
          { range: [4, 5], color: "rgba(255, 100, 0, 0.5)" },   // Orange
          { range: [5, 6], color: "rgba(255, 100, 0, 0.75)" },  // Darker orange
          { range: [6, 7], color: "rgba(100, 255, 0, 0.25)" },  // Orange to green transition
          { range: [7, 8], color: "rgba(100, 255, 0, 0.5)" },   // Green
          { range: [8, 9], color: "rgba(0, 255, 0, 0.5)" },    // Light green
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



// Sample usage:
createGaugeChart(3);