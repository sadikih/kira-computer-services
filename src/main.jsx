import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from './lib/router'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>
)

// Hydrate only when the prerendered HTML is for this URL. The dev server (empty
// #root), 404.html, and hosts that answer unknown URLs with another page (an
// SPA fallback, or client-only routes like Supabase case studies) render fresh.
const here = window.location.pathname.replace(/(.)\/+$/, '$1')
if (root.hasChildNodes() && root.dataset.route === here) {
  hydrateRoot(root, app)
} else {
  root.replaceChildren()
  createRoot(root).render(app)
}
