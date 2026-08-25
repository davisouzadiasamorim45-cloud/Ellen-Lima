import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Planos from './pages/Planos';
import Preloader from './components/Preloader';

const SEEN_KEY = 'ellen-preloader-seen';

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    // sessionStorage unavailable (private mode, etc.) — just show it once per tab in memory
    return false;
  }
}

export default function App() {
  // Only the first page load of the browser tab plays the intro — going
  // from Home to Planos (or back) is a full page navigation via plain
  // <a> links, which would otherwise replay it every time.
  const [loading, setLoading] = useState(() => !alreadySeen());

  const finish = () => {
    try { sessionStorage.setItem(SEEN_KEY, '1'); } catch {}
    setLoading(false);
  };

  return (
    <BrowserRouter>
      {loading && <Preloader onDone={finish} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>
    </BrowserRouter>
  );
}
