import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sreesairam");
  
  useEffect(() => {
    console.log("Count updated:", count);
    console.log("Name updated:", name);
  }, [count, name]);
  
  return (
    <div style={{ padding: '50px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', fontSize: '32px' }}>UseEffect Practice</h1>
      <p style={{ color: '#666', fontSize: '20px' }}>Count: {count}</p>
      <p style={{ color: '#666', fontSize: '20px' }}>Name: {name}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', margin: '10px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
      />
    </div>
  );
};

export default UseEffectComponent;