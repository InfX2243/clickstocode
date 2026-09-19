import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import './styles.css';
import './cinematic-scroll.css';
import './cinematic-motion.css';
import './screen15-fix.css';

createRoot(document.getElementById('root')!).render(<Home />);
