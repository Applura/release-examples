import { createContext } from 'react';

export const ResourceContext = createContext(null);

export const ResourceProvider = ({ resource, problem, loading, client, children }) => {
  const follow = client && client.hasOwnProperty('follow') ? client.follow : () => {};
  return (
    <ResourceContext.Provider value={{ resource, problem, loading, follow }}>
      {children}
    </ResourceContext.Provider>
  )
}
