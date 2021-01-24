import React from 'react';

const Home = () => {
  return (
    <div style={homeStyle}>
      <h1>Home</h1>
    </div>
  );
};

const homeStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
};

export default Home;
