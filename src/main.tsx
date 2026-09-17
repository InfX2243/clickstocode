import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import './styles.css';

function App(){return <div className="min-h-screen bg-[#0a0e18] text-[#dfe2f1]"><main><Home/></main><footer className="w-full bg-[#080b13] border-t border-white/5 py-12"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40"><span>© 2024 AWS SBG MHSSCE. Student cloud development initiative.</span><span>M. H. Saboo Siddik College of Engineering, Byculla, Mumbai - 400008</span><a className="hover:text-[#00d26a]" href="#screen-1">Back to top ↑</a></div></footer></div>}

createRoot(document.getElementById('root')!).render(<App/>);
