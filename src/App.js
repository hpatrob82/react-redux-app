import React, { Component } from 'react';
import { StateProvider } from 'react';
import { useReducer } from 'react';
import "./App.css";


function App() {
  
    const initialState= {
      activity: 'napping'
    };
    const contextReducer = (state, action) => {
      switch (action.type) {
        case 'ACTION_EAT':
          return {
            activity: 'eating'
          }
        case 'ACTION_NAP':
          return {
            activity: 'napping'
          };

          default:
            return state;
      }
    }
    return (
      <div className="App">
    <StateProvider value={useReducer(contextReducer,initialState)}>
    
    <h1>Context DEMO</h1>
    
    </StateProvider>
    </div>
  );
}

export default App;
