import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import './styles.css';
// Note: Legacy cinematic CSS files (cinematic-scroll.css, cinematic-motion.css, etc.)
// are preserved on disk as deprecated per migration specification.

createRoot(document.getElementById('root')!).render(<Home />);
