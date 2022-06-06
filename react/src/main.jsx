import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Client from 'applura/client';
const container = document.getElementById('app');
console.assert(container);

const client = new Client();
for await (const { resource, problem } of client.start()) {
  ReactDOM.hydrateRoot(container, <App resource={resource} problem={problem} client={client} />);
}
