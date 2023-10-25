// Define the URL for the JSON data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Use D3 to fetch the JSON data
d3.json(url)
  .then(function(data) {
    // Handle the JSON data here
    console.log(data); // You can replace this with your data processing logic
  })
  .catch(function(error) {
    // Handle any errors that occur during the request
    console.error("Error fetching data:", error);
  });