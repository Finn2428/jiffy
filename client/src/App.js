import React, { useState } from 'react';
import Customer from './Customer';
import Fixer from './Fixer';

function App() {
  const [role, setRole] = useState(null);

  return (
    <div>
      <h1>Welcome to Jiffy</h1>
      {!role && (
        <div>
          <button onClick={() => setRole('customer')}>I am a Customer</button>
          <button onClick={() => setRole('fixer')}>I am a Fixer</button>
        </div>
      )}
      {role === 'customer' && <Customer />}
      {role === 'fixer' && <Fixer />}
    </div>
  );
}

export default App;
