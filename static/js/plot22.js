// Define the URL for the JSON data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Use D3 to fetch the JSON data
d3.json(url)
  .then(function(data) {
    // Handle the JSON data here
    addCountriesToDropDown(data); // You can replace this with your data processing logic
  })
  .catch(function(error) {
    // Handle any errors that occur during the request
    console.error("Error fetching data:", error);
  });


  // Populate Dropdwon with Coutnry Names
  function addCountriesToDropDown(data){
    const dropdown = d3.select(`#selDataset`);
    for (let i = 0; i < data.length; i++) {
      let option = dropdown.append('option');
      option.attr('value', data[i].name).text(data[i].name);
    }
  }

  // Initial Setup
  function init() {
    addCountriesToDropDown(countries);
    plotBarChart(countries[0]);
    displayMetadata9(ountries[0]);
  }

  // Plot Bar Chart
  function plotBarChart(country) {
    let x_values = country.cities.map(city => city.population);
    let y_values = country.cities.map(city => city.name);

    const plotData = [
      {
        x: x_values,
        y: y_values,
        type: 'bar',
        orientation: 'h'
      }
    ];
      Plotly.newPlot('bar', plotData)
    }

    // Display Metadata
    function displayMetadata(country) {
      const panel = d3.select(`#sample-metadata`);
      panel.html('')  // Clear existing metadata
      panel.append('p').text('Capital: $(country.metadata.capital)');
      panel.append('p').text('Population: $(country.metadata.population)');
      panel.append('p').text('Area: $(country.metadata.area)');
    }

    // Create Bar Chart for the selected sample
function optionChanged(value) {
  let selectedCountry = countries.find(country => country.name === value);
  plotBarChart(selectedCountry);
  displayMetadata(selectedCountry);
}

// Initialize the dashboard
init();