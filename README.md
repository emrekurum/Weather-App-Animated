
# Weather App using OpenWeather API

This is a simple weather app built with React Native. The app allows users to input the name of a city, fetches the weather data from the OpenWeather API, and displays the current weather conditions along with a relevant animation.

## Features:
1. **City Search**: Users can input the name of any city to get its current weather.
2. **Weather Data**: The app fetches data like temperature, weather conditions, and more from the OpenWeather API.
3. **Weather Animation**: Based on the weather conditions, an appropriate animation is displayed using Lottie, adding an engaging visual element to the app.
4. **Error Handling**: The app handles cases where the city is not found or when there is an issue with fetching the data.

## Components:
- **TextInput**: Allows the user to enter the city name.
- **Button**: A button to trigger the weather data fetch process.
- **LottieView**: Displays a weather-related animation based on the fetched weather data.

## How it works:
- The user enters a city name in the input field and clicks the button to fetch the weather.
- The app sends a request to the OpenWeather API with the city name and an API key stored in the `.env` file.
- On success, it displays the current temperature and weather information, along with an animation reflecting the weather.
- If there’s an issue (such as incorrect city name or API failure), the app shows an alert message.

## Technologies Used:
- **React Native** for building the mobile application.
- **OpenWeather API** for fetching weather data.
- **Lottie** for displaying animations based on weather conditions.
