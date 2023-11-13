const express = require('express');
const axios = require('axios');
require('dotenv').config()

const app = express();

// Define an endpoint for getting the weather data
app.get('/weather/:city', async (req, res) => {
    console.log(process.env.OPENWEATHERMAP_API_KEY);
  // Get the city name from the request
  const city = req.params.city;
  
  try {
    // Make a request to the OpenWeatherMap API using axios
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHERMAP_API_KEY}`);

    
    // Send the weather data back to the client
    res.send(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
