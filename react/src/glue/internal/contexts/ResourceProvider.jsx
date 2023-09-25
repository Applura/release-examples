import { useEffect, useState } from 'react';
import { ResourceContext } from "./ResourceContext";

export const ResourceProvider = ({ client, children }) => {
  const initialState = { resource: undefined, problem: undefined, loading: true };
  const [ { resource, problem, loading }, setState ] = useState(initialState);

  useEffect(() => {
    (async () => {
      for await (const { resource, problem } of client.start()) {
        setState({ resource, problem, loading: false });
      }
    })()
    return () => client.stop();
  }, [client]);

  const follow = async (link, options = {}) => {
    setState({ resource, problem, loading: true });
    await client.follow(link, options);
  }

  return (
    <ResourceContext.Provider value={{ resource, problem, loading, follow }}>
      {children}
    </ResourceContext.Provider>
  )
}
