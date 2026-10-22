// Vite turns the image import into a URL.
import { BrowserRouter, Route, Routes } from 'react-router';
import Welcome from './Welcome';
import About from './About';
import Nav from './Nav';
import Test from './Test';
import FallBack from './FallBack';

export default function App() {
  return (
    <BrowserRouter>
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
          {/* path="*" matches any URL */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
