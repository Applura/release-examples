import { createContext } from "react";

const ResourceContext = createContext(null);
const ResourceProvider = ({ resource, problem, client, children }) => {

  const follow = client && client.hasOwnProperty('follow') ? client.follow : () => {};
  return (
    <ResourceContext.Provider value={{ resource, problem, follow }}>
      {children}
    </ResourceContext.Provider>
  )
}

export { ResourceContext, ResourceProvider };
