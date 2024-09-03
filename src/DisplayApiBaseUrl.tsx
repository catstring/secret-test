import React, { useEffect } from 'react';

const DisplayApiBaseUrl: React.FC = () => {
  useEffect(() => {
    console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL);
  }, []);

  return (
    <div>
      <h1>Check the console for the API Base URL</h1>
    </div>
  );
};

export default DisplayApiBaseUrl;
