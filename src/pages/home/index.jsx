import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CounterContext } from '../../context/counterContext';

function Home() {
  const { state } = useLocation();

  return (
    <div>
      <h1>{state ? `Hello ${state.name}` : 'LogIn first'}</h1>
      <CounterContext.Consumer>
        {(data) => (
          <div>
            <p className="">{data.counter}</p>
            <button type="button" onClick={() => data.setCounter((val) => val + 1)}>
              Increment Counter
            </button>
          </div>
        )}
      </CounterContext.Consumer>

    </div>
  );
}

export default Home;
