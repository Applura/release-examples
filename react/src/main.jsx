import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { bootstrap } from 'client';
const container = document.getElementById('app');
console.assert(container);

const client = bootstrap();
const init = async () => {
  let root = null;
  const render = (component) => {
    if (!root && container.dataset.appluraRendered) {
      root = hydrateRoot(container, component);
    } else {
      (root ?? (root = createRoot(container))).render(component);
    }
  }
  for await (const { resource, problem, loading } of client.start()) {
    render(<App resource={resource} problem={problem} loading={loading} client={client} />);
  }
}
// To avoid top level await.
init();
