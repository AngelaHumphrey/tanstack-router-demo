// Vite turns the image import into a URL
import logo from '../img/clock.png';
import Counter from './Counter';

export default function Welcome() {
  return (
    // <> and </> are a fragment (lets you group without a wrapper)
    <>
      <img src={logo} alt="" className="size-24 transition hover:rotate-6" />
      <Counter />
    </>
  );
}
