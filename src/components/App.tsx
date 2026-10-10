// Vite turns the image import into a URL.
import logo from '../img/clock.png';
import Counter from './Counter';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <img src={logo} alt="" className="size-24 transition hover:rotate-6" />
      <Counter />
    </main>
  );
}
