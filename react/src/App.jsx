import React from 'react'
import Page from './pages/Page';
import { ResourceProvider } from './ResourceContext';
function App({ resource, problems, client, loading }) {

  return (
    <React.StrictMode>
      <ResourceProvider resource={resource} problems={problems} client={client}>
        {resource && <Page type={resource.type}>

        </Page>}
        {loading && <p>Loading...</p>}
      </ResourceProvider>
    </React.StrictMode>
  )
}

export default App
