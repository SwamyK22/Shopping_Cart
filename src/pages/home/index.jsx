import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>{`Hello ${state.name}`}</h1>
    </div>
  );
}

export default Home;
