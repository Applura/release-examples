import { createContext, useState } from 'react';
import Client from 'client';

export const ResourceContext = createContext(null);

export const ResourceProvider = ({ resource, problem, client, children }) => {
  const [ loading, setLoading ] = useState(!resource);
  const follow = async (link, options = {}) => {
    if (client instanceof Client) {
      setLoading(true);
      await client.follow(link, options);
      setLoading(false);
    }
  }
  return (
    <ResourceContext.Provider value={{ resource, problem, loading, follow }}>
      {children}
    </ResourceContext.Provider>
  )
}
