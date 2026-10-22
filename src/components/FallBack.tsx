import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';

export default function FallBack() {
  return (
    <>
      <p>URL not found :(</p>
      <Button>
        <Link to="/">
          Back home
        </Link>
      </Button>
    </>
  );
}
