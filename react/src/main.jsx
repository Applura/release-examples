import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
const container = document.getElementById('app');
console.assert(container);

ReactDOM.hydrateRoot(container, <App />);
