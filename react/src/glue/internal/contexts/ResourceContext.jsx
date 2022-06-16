import { createContext } from 'react';

export const ResourceContext = createContext(null);

export const ResourceProvider = ({ resource, problem, client, children }) => {
  const follow = client && client.hasOwnProperty('follow') ? client.follow : () => {};
  return (
    <ResourceContext.Provider value={{ resource, problem, follow }}>
      {children}
    </ResourceContext.Provider>
  )
}
