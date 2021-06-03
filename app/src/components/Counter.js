import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => setCount(count + 1);

  if (count > 5) {
    throw new Error('I crashed');
  }

  return (
    <div>
      {count}
      <button onClick={increaseCounter}>increase</button>
    </div>
  )
}

export default Counter;