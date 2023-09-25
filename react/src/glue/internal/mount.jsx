import { bootstrap } from 'https://cdn.applura.com/dist/js/client/v2.js';
import { ResourceProvider } from './contexts/ResourceProvider';
import { createRoot, hydrateRoot } from 'react-dom/client';

export default async function mount(Component, id) {
  const container = document.getElementById(id);
  const RootChild = (
    <ResourceProvider client={bootstrap()}>
      <Component/>
    </ResourceProvider>
  );
  if (container.dataset.serverRendered) {
    hydrateRoot(container, RootChild);
  } else {
    createRoot(container).render(RootChild);
  }
}
