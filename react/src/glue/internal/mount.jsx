import { bootstrap } from 'client';
import { ResourceProvider } from './contexts/ResourceContext';
import { createRoot, hydrateRoot } from 'react-dom/client';

export default async function mount(Component, id) {
  const container = document.getElementById(id);
  const client = bootstrap();
  let root;
  for await (const { resource, problem, loading } of client.start()) {
    const RootChild = (
      <ResourceProvider resource={resource} problem={problem} loading={loading} client={client}>
        <Component/>
      </ResourceProvider>
    );
    if (!root && container.dataset.appluraRendered) {
      root = hydrateRoot(container, RootChild);
    } else {
      (root || (root = createRoot(container))).render(RootChild);
    }
  }
}
