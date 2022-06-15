import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { bootstrap } from 'client';

const container = document.getElementById('app');

const init = async () => {
  const client = bootstrap();
  for await (const { resource, problem, loading } of client.start()) {
    render(<App resource={resource} problem={problem} loading={loading} client={client} />);
  }
}

let root = null;
const render = (component) => {
  if (!root && container.dataset.appluraRendered) {
    root = hydrateRoot(container, component);
  } else {
    (root ?? (root = createRoot(container))).render(component);
  }
}
// To avoid top level await.
init();
