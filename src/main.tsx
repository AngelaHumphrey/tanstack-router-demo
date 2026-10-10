import { createRoot } from 'react-dom/client';
import App from './components/App';
import './style.css';

// React takes over the <div id="main"> in index.html and draws <App /> inside it.
const main = document.getElementById('main');
if (main) {
  createRoot(main).render(<App />);
}
