import React, { useState } from 'react';

function Fixer() {
  const [specialties, setSpecialties] = useState([]);
  const categories = ['grass', 'trees', 'plants', 'soil/mulch', 'driveway', 'power washing', 'yard care', 'painting', 'screen repair', 'carpet removal', 'plumbing'];

  function toggleSpecialty(item) {
    if (specialties.includes(item)) {
      setSpecialties(specialties.filter(i => i !== item));
    } else {
      setSpecialties([...specialties, item]);
    }
  }

  return (
    <div>
      <h2>Fixer Portal</h2>
      <p>Select your specialties:</p>
      {categories.map((item) => (
        <button key={item} onClick={() => toggleSpecialty(item)} style={{ backgroundColor: specialties.includes(item) ? 'lightgreen' : '' }}>{item}</button>
      ))}
      <p>You selected: {specialties.join(', ')}</p>
    </div>
  );
}

export default Fixer;
