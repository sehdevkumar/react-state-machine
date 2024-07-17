import React from 'react';
import { useMachine } from '@xstate/react';
import lightMachine from './lightMachine';



const Light: React.FC = () => {
  const [state, send] = useMachine(lightMachine);

  return (
    <div>
      <h1>Light traffic</h1>
      <h1>Updated: {state.context.updated} times</h1>
      <div style={{display:'flex', justifyContent:'center', marginBottom: 20}}>

      {state.matches('green') && (
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'green',
            marginTop: 10,
          }}
        />
      )}
      {state.matches('yellow') && (
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'yellow',
            marginTop: 10,
          }}
        />
      )}
      {state.matches('red') && (
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'red',
            marginTop: 10,
          }}
        />
      )}
      </div>
      <button
        disabled={!state.matches('green')}
        onClick={() => send({ type: 'YELLOW' })}
      >
        YELLOW
      </button>
      <button
        disabled={!state.matches('yellow')}
        onClick={() => send({ type: 'RED' })}
      >
        RED
      </button>
      <button
        disabled={!state.matches('red')}
        onClick={() => send({ type: 'GREEN' })}
      >
        GREEN
      </button>
    </div>
  );
};

export default Light;
