import ReactDOMServer from 'react-dom/server';
import { ResourceProvider } from './contexts/ResourceContext';

export default function serve(Component, resource) {
  return ReactDOMServer.renderToReadableStream(
    <ResourceProvider resource={resource} problem={undefined} loading={undefined} client={undefined}>
      <Component />
    </ResourceProvider>
  );
}
