import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Router from './routes'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </QueryClientProvider>
)
