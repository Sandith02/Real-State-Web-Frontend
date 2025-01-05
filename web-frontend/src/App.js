import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoadingPage from './Pages/LoadingPage';
import PropertiesPage from './Pages/PropertiesPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Show the loading page for 3 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        // If still loading, show the LoadingPage
        <LoadingPage />
      ) : (
        // If loading is complete, show the router and the rest of the app
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
