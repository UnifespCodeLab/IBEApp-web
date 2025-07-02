import { StrictMode } from 'react'; 
import ReactDOM from 'react-dom/client'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>
)