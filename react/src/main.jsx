import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { bootstrap } from 'client';
const container = document.getElementById('app');
console.assert(container);

const client = bootstrap();
const init = async () => {
  for await (const { resource, problem } of client.start()) {
    ReactDOM.hydrateRoot(container, <App resource={resource} problem={problem} client={client} />);
  }
}
// To avoid top level await.
init();
