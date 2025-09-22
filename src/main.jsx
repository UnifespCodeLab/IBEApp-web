import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import Provider from './components/Provider/index'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>,
)
