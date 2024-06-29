const apiKey = 'a302ff2e65ce5e69c01486b2f0b52339'
const url = `https://api.marketstack.com/v1/tickers/aapl/eod/latest?access_key=${apiKey}`



async function fetchTickers() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      // Process the data as needed
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  fetchTickers();