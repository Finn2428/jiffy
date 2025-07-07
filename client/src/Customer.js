import React, { useState } from 'react';

function Customer() {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState(null);

  const outdoor = ['grass', 'trees', 'plants', 'soil/mulch', 'driveway', 'power washing', 'yard care'];
  const indoor = ['painting', 'screen repair', 'carpet removal', 'plumbing'];

  function handleSubmit() {
    const fixerAvailable = Math.random() > 0.3;
    const price = (Math.random() * 200 + 50).toFixed(2);
    const arrival = Math.floor(Math.random() * 3) + 1;
    const completion = arrival + Math.floor(Math.random() * 3) + 1;

    setResult({ fixerAvailable, price, arrival, completion });
  }

  return (
    <div>
      <h2>Customer Portal</h2>

      {!category && (
        <>
          <button onClick={() => setCategory('outdoor')}>Outdoor/Garden</button>
          <button onClick={() => setCategory('indoor')}>Indoor</button>
        </>
      )}

      {category && !subcategory && (
        <div>
          {(category === 'outdoor' ? outdoor : indoor).map((item) => (
            <button key={item} onClick={() => setSubcategory(item)}>{item}</button>
          ))}
        </div>
      )}

      {subcategory && !description && (
        <div>
          <textarea placeholder="Describe your issue" onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {result && (
        <div>
          {result.fixerAvailable ? (
            <>
              <p>Fixer found!</p>
              <p>Price: ${result.price}</p>
              <p>Arrival: {result.arrival} hour(s)</p>
              <p>Completion in: {result.completion} hour(s)</p>
              <p>Thank you for using Jiffy!</p>
            </>
          ) : (
            <p>Sorry, no fixer available right now.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Customer;
