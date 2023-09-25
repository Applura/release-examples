import { ResourceContext } from "./ResourceContext";
export const ResourceProvider = ({ resource, children }) => {
  const follow = async (link, options = {}) => {
    throw new Error('Cannot follow links without a client');
  }

  return (
    <ResourceContext.Provider value={{ resource, problem: undefined, loading: false }}>
      {children}
    </ResourceContext.Provider>
  )
}
