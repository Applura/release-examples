import { bootstrap } from 'client';
import { ResourceProvider } from './contexts/ResourceContext';
import { createRoot, hydrateRoot } from 'react-dom/client';

export default async function mount(Component, id) {
  const container = document.getElementById(id);
  const RootChild = (
    <ResourceProvider client={bootstrap()}>
      <Component/>
    </ResourceProvider>
  );
  if (container.dataset.appluraRendered) {
    hydrateRoot(container, RootChild);
  } else {
    createRoot(container).render(RootChild);
  }
}
