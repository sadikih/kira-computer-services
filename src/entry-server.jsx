import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { RouterProvider } from './lib/router'

export { staticRoutes } from './routes.js'
export { siteInfo, services, industries } from './data/content.js'

export function render(url) {
  return renderToString(
    <StrictMode>
      <RouterProvider url={url}>
        <App />
      </RouterProvider>
    </StrictMode>,
  )
}
