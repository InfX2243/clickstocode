import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import './styles.css';

function App() {
  return (
    <main>
      <Home />
      <footer className="site-footer">
        <span>© 2026 AWS Student Builder Group MHSSCE</span>
        <span>M. H. Saboo Siddik College of Engineering, Byculla, Mumbai</span>
        <a href="#screen-1">Back to top ↑</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
