import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// No StrictMode: these pages run imperative, ported-from-vanilla-JS DOM
// effects (scroll reveals, pinned sections, tab state) against markup
// injected via dangerouslySetInnerHTML. StrictMode's dev-only double
// effect invocation would double up one-time DOM insertions (list dot
// marks, featured-card corner brackets) since only the effects re-run,
// not the render.
createRoot(document.getElementById('root')).render(<App />)
