import React from 'react';
import './App.scss';
import NearestWeather from './components/NearestWeather/NearestWeather';
import Logo from './components/Logo/Logo';
import PastForecast from './components/PastForecast/PastForecast';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Logo />
      <div className='weather-container'>
        <NearestWeather />
        <PastForecast />
      </div>
      <footer>C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</footer>
    </div>
  );
};

if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('/weather-forecast/sw.js').then(function (registration) {
    console.log('Service worker registration succeeded:', registration);
  }, function (error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}

export default App;
