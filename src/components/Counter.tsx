import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Button size="lg" onClick={() => setCount(count + 1)}>
      Clicked {count} {count === 1 ? 'time' : 'times'}
    </Button>
  );
}
