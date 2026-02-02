import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter }  from 'react-router-dom'
import App from './App.jsx'
import { WebContextProvider } from './context/WebContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <WebContextProvider>
        <App />
        </WebContextProvider>
    </BrowserRouter>
)
