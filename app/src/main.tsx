import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.tsx";
import FormBuilderProvider from "./hooks/useFormContext.tsx";

createRoot(document.getElementById('root')!).render(
  <>
      <App/>
  </>,
)

