const key = "demo";
const functionName = "TIME_SERIES_DAILY";
const symbolName = "MSFT";
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;

axios
  .get(apiUrl)
  .then(responseFromAPI => {
    printTheChart(responseFromAPI.data); // <== call the function here where you used to console.log() the response
  })
  .catch(err => {
    console.log("Error while getting the data: ", err);
  });

function printTheChart(stockData) {
  const dailyData = stockData["Time Series (Daily)"];

  const stockDates = Object.keys(dailyData);
  const stockPrices = stockDates.map(date => {
    return dailyData[date]["4. close"];
  });

  const ctx = document.getElementById("myChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: stockDates,
      datasets: [
        {
          label: "Negociación en bolsa",
          backgroundColor: "rgb(100, 100, 100)",
          borderColor: "rgb(255, 0, 0)",
          data: stockPrices
        }
      ]
    }
  }); // closes chart = new Chart()
} // closes printTheChart()