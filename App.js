import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import { OPENWEATHER_API_KEY } from '@env';

export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [animation, setAnimation] = useState(null);

  const getWeather = () => {
    if (city.trim() === '') {
      alert('Please enter a city name!');
      return;
    }

    const formattedCity = encodeURIComponent(city.trim());
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData(data);
          setWeatherAnimation(data.weather[0].main);
        } else {
          alert(`City not found! Error: ${data.message}`);
        }
      })
      .catch((error) => {
        console.error('Error fetching the weather data:', error);
        alert('An error occurred while fetching weather data.');
      });
  };

  // Diğer bileşenler ve fonksiyonlar...
}
