import React, { useEffect } from 'react';

const YourComponent = () => {
  const apiToken = "G0hmBWqiGOBpASmRxEHG9g=="; // Insert your CodeJudge API token here

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('https://app.codejudge.net/api/auth/token', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            grantType: 'refresh_token',
            refreshToken: apiToken
          })
        });
 
        console.log('Token fetched successfully:', response);
      } catch (error) {
        console.error('Error fetching token:', error.message);
      }
    };

    fetchToken();
  }, [apiToken]);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default YourComponent;
