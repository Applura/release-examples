import React from 'react'
import Page from './pages/Page';
import { ResourceProvider } from './ResourceContext';
function App({ resource, problems, client }) {

  return (
    <React.StrictMode>
      <ResourceProvider resource={resource} problems={problems} client={client}>
        <Page type={resource.type}>

        </Page>
      </ResourceProvider>
    </React.StrictMode>
  )
}

export default App
