import { Link } from 'react-router';
import { buttonVariants } from './ui/button';

export default function FallBack() {
  return (
    <>
      <p>URL not found :(</p>
      <Link to="/" className={buttonVariants({ variant: 'secondary' })}>
        Back home
      </Link>
    </>
  );
}
