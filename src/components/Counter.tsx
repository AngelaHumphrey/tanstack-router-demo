import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      onClick={() => setCount(count + 1)}
      className="rounded-full bg-white/80 px-6 py-3 text-lg font-semibold text-sky-900 hover:bg-white"
    >
      Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  );
}
