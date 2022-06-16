import { createRoot, hydrateRoot } from 'react-dom/client';
import ReactDOMServer from "react-dom/server";
import { bootstrap } from 'client';
import { ResourceProvider } from "./ResourceContext";

async function mount(Component, id) {
  const container = document.getElementById(id);
  const client = bootstrap();
  let root;
  for await (const { resource, problem, loading } of client.start()) {
    const RootChild = (
      <ResourceProvider resource={resource} problem={problem} loading={loading} client={client}>
          <Component />
      </ResourceProvider>
    );
    if (!root && container.dataset.appluraRendered) {
      root = hydrateRoot(container, RootChild);
    } else {
      (root || (root = createRoot(container))).render(RootChild);
    }
  }
}

function serve(Component, resource) {
  return ReactDOMServer.renderToReadableStream(
    <ResourceProvider resource={resource} problem={undefined} loading={undefined} client={undefined}>
      <Component />
    </ResourceProvider>
  );
}

export { mount, serve };
